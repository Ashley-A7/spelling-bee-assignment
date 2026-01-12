import { JSX } from "react";

interface Hexagon {
    letter: string;
    handleClick: (letter: string) => void;
}
export default function Hexagon({ letter, handleClick }: Hexagon): JSX.Element {
    return <button onClick={() => handleClick(letter)}>{letter}</button>;
}
