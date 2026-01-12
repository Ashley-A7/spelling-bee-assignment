import { JSX } from "react";
import { LettersSelectionTypes } from "../../../types/GameBoard.tsx";
import Hexagon from "./components/Hexagon";
import "./style.css";

export default function LettersSelection(
    { puzzle, setWordIs }: LettersSelectionTypes,
): JSX.Element {
    function handleClick(n: string): void {
        setWordIs((p) => [...(p ?? []), n]);
    }

    return (
        <div className={"letters-selection"}>
            <ul className="hive">
                {[puzzle.centerLetter, ...puzzle.edgeLetters].map((letter) => (
                    <Hexagon
                        key={letter}
                        letter={letter}
                        handleClick={handleClick}
                    />
                ))}
            </ul>
        </div>
    );
}
