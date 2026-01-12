import { JSX } from "react";
import React from "react";
import { LettersInputTypes } from "../../../types/GameBoard.tsx";
import "./style.css";

export default function LettersInput(
    { wordIs, setWordIs, handleSubmit }: LettersInputTypes,
): JSX.Element {
    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            handleSubmit();
        }
    }

    return (
        <>
            <label htmlFor="letters-input" className="hide-label">
                Enter letters
            </label>
            <input
                name={"letters-input"}
                className={"letters-input"}
                value={wordIs.join("")}
                onChange={e => setWordIs(e.target.value.split(""))}
                onKeyDown={handleKeyDown}
                aria-label="Enter letters"
            />
        </>
    );
}
