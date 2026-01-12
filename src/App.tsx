import { JSX, useState } from "react";
import GameBoard from "./components/GameBoard";
import Scoreboard from "./components/Scoreboard";
import puzzle from "./puzzle.ts";
import calculateWordScore from "./utils/calculateWordScore.ts";
import { ERRORS_LIST } from "./utils/enums.ts";
import "./App.css";

type WordScore = {
    word: string;
    points: number;
};

export default function App(): JSX.Element {
    const [wordIs, setWordIs] = useState<string[]>([]);
    const [wordsBank, setWordsBank] = useState<WordScore[]>([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [errors, setErrors] = useState<string[]>([]);

    const minCharacters = 4;
    const maxPoints = puzzle.maxScore;

    function handleSubmit(): void {
        const word = wordIs.join("").toLowerCase();

        if (handleErrors(word)) {
            const points = calculateWordScore(
                word,
                puzzle.centerLetter,
                puzzle.edgeLetters,
            );

            setWordsBank(prev => [...prev, { word, points }]);
            setCurrentScore(prev => prev + points);
            setWordIs([]);
        }
    }

    function handleErrors(word: string): boolean {
        const newErrors: string[] = [];

        if (word.length < minCharacters) newErrors.push(ERRORS_LIST.min4);

        if (!/^[A-Za-z]+$/.test(word)) newErrors.push(ERRORS_LIST.onlyLetters);

        if (!puzzle.words.includes(word)) {
            newErrors.push(ERRORS_LIST.excludedWord);
        }

        const wordsInBank = wordsBank.map(w => w.word);
        if (wordsInBank.includes(word)) {
            newErrors.push(ERRORS_LIST.duplicateWord);
        }

        setErrors(newErrors);
        return !newErrors.length;
    }

    return (
        <div className="game-wrapper">
            <section className="game-panel">
                <GameBoard
                    puzzle={puzzle}
                    wordIs={wordIs}
                    setWordIs={setWordIs}
                    handleSubmit={handleSubmit}
                    errors={errors}
                />

                <Scoreboard
                    currentScore={currentScore}
                    maxPoints={maxPoints}
                    words={wordsBank}
                />
            </section>
        </div>
    );
}
