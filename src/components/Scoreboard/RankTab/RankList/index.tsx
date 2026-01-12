import { JSX } from "react";
import "./style.css";
import { ranks } from "../../../../utils/ranks";

type RankListProps = {
    currentScore: number;
    maxPoints: number;
};

export default function RankList(
    { currentScore, maxPoints }: RankListProps,
): JSX.Element {
    const qualifyingRanks = ranks.filter(rank =>
        currentScore >= Math.round(rank.fraction * maxPoints)
    );

    const highestQualifyingRank = qualifyingRanks[0];

    return (
        <table className="rank-list-table">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Minium Score</th>
                </tr>
            </thead>

            <tbody>
                {ranks.map(rank => (
                    <tr
                        key={rank.title}
                        className={`rank-list-row ${
                            rank.title === highestQualifyingRank?.title
                                ? "current-rank"
                                : ""
                        }`}
                    >
                        <td className="rank-title">
                            <div className="rank-title-wrapper">
                                {rank.title === highestQualifyingRank?.title
                                    && (
                                        <span className="current-score-badge">
                                            {currentScore}
                                        </span>
                                    )}
                                {rank.title}
                            </div>
                        </td>
                        <td className="minimum-score">
                            {Math.round(rank.fraction * maxPoints)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
