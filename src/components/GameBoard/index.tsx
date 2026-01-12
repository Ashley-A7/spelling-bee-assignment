import { JSX, useState } from "react";
import { GameBoardTypes } from "../../types/GameBoard.tsx";
import shuffle from "../../utils/shuffle";
import Controllers from "./Controllers";
import LettersInput from "./LettersInput";
import LettersSelection from "./LettersSelection";
import "./style.css";

export default function GameBoard(
    { puzzle, wordIs, setWordIs, handleSubmit, errors }: GameBoardTypes,
): JSX.Element {
    const [edges, setEdges] = useState<string[]>(puzzle.edgeLetters);

    const puzzleData = { ...puzzle, edgeLetters: edges };

    return (
        <div className="game-board">
            <ul className={"display-errors"}>
                {errors.map((error) => (
                    <li key={error.replace(" ", "")}>{error}</li>
                ))}
            </ul>
            <LettersInput
                wordIs={wordIs}
                setWordIs={setWordIs}
                handleSubmit={handleSubmit}
            />
            <LettersSelection puzzle={puzzleData} setWordIs={setWordIs} />
            <Controllers
                handleShuffle={() => setEdges(prev => shuffle(prev))}
                handleReset={() => setWordIs([])}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}
