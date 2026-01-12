import { IoShuffle } from "react-icons/io5";
import Button from "../../../elements/Button";
import "./style.css";
import { JSX } from "react";

type ControllersProps = {
    handleShuffle: () => void;
    handleReset: () => void;
    handleSubmit: () => void;
};

export default function Controllers(
    { handleShuffle, handleReset, handleSubmit }: ControllersProps,
): JSX.Element {
    return (
        <div className="controllers-component">
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleShuffle} aria-label="Shuffle letters">
                <IoShuffle />
            </Button>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    );
}
