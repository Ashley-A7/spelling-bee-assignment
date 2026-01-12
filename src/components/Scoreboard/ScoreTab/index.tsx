import { JSX } from "react";
import "./style.css";
import WordScoreList from "./WordScore";

export type ScoredWord = {
    word: string;
    points: number;
};

type ScoreTabProps = {
    words: Array<ScoredWord>;
};

export default function ScoreTab({ words }: ScoreTabProps): JSX.Element {
    return <WordScoreList words={words} />;
}
