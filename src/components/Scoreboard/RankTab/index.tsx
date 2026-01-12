import { JSX } from "react";
import "./style.css";
import RankList from "./RankList";

type RankTabProps = {
    currentScore: number;
    maxPoints: number;
};

export default function RankTab(
    { currentScore, maxPoints }: RankTabProps,
): JSX.Element {
    return <RankList currentScore={currentScore} maxPoints={maxPoints} />;
}
