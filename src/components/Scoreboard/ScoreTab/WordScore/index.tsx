import { JSX } from "react";
import "./style.css";

type WordScore = {
    word: string;
    points: number;
};

type WordScoreListProps = {
    words: Array<WordScore>;
};

export default function WordScoreList(
    { words }: WordScoreListProps,
): JSX.Element {
    return (
        <table className="word-points-table">
            <thead>
                <tr>
                    <th>Word</th>
                    <th>Points</th>
                </tr>
            </thead>

            <tbody>
                {words.map((word) => (
                    <tr key={word.word} className="word-points-row">
                        <td className="word">{word.word}</td>
                        <td className="points">{word.points}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
