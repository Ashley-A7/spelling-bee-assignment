import { ranks } from "./ranks.ts";

export default function getRank(score: number, maxPoints: number): string {
    const qualifyingRanks = ranks.filter(
        (rank) => score >= Math.round(rank.fraction * maxPoints),
    );

    return qualifyingRanks[0]?.title ?? "Beginner";
}
