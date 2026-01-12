import { JSX } from "react";

type CurrentScoreDisplayProps = {
    score: number;
};

export default function CurrentScoreDisplay(
    { score }: CurrentScoreDisplayProps,
): JSX.Element {
    return <div className="current-score">Score: {score}</div>;
}
