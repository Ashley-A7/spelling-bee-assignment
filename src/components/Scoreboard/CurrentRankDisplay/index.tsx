import { JSX } from "react";

type CurrentRankDisplayProps = {
    rank: string;
};

export default function CurrentRankDisplay(
    { rank }: CurrentRankDisplayProps,
): JSX.Element {
    return <div className="current-rank">Rank: {rank}</div>;
}
