import { useState } from "react";
import CurrentRankDisplay from "./CurrentRankDisplay";
import CurrentScoreDisplay from "./CurrentScoreDisplay";
import RankTab from "./RankTab";
import ScoreTab from "./ScoreTab";
import TabController from "./TabController";
import "./style.css";
import { JSX } from "react";
import getRank from "../../utils/getRank";

type WordScore = {
    word: string;
    points: number;
};

type ScoreboardProps = {
    currentScore: number;
    maxPoints: number;
    words: Array<WordScore>;
};

export default function Scoreboard(
    { currentScore, maxPoints, words }: ScoreboardProps,
): JSX.Element {
    const [currentTab, setCurrentTab] = useState("score-tab");
    const currentRank = getRank(currentScore, maxPoints);

    return (
        <section className="score-board">
            <div className="score-rank-display">
                <CurrentScoreDisplay score={currentScore} />
                <CurrentRankDisplay rank={currentRank} />
            </div>

            <TabController
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />

            <div className="active-tab">
                {currentTab === "score-tab"
                    ? <ScoreTab words={words} />
                    : (
                        <RankTab
                            currentScore={currentScore}
                            maxPoints={maxPoints}
                        />
                    )}
            </div>
        </section>
    );
}
