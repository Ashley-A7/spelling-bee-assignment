import { JSX } from "react";
import "./style.css";

type TabControllerProps = {
    currentTab: string;
    setCurrentTab: (tab: string) => void;
};

export default function TabController(
    { currentTab, setCurrentTab }: TabControllerProps,
): JSX.Element {
    return (
        <nav className="tab-controller">
            <button
                onClick={() => setCurrentTab("score-tab")}
                className={currentTab === "score-tab" ? "active" : ""}
            >
                Score
            </button>
            <button
                onClick={() => setCurrentTab("rank-tab")}
                className={currentTab === "rank-tab" ? "active" : ""}
            >
                Rank
            </button>
        </nav>
    );
}
