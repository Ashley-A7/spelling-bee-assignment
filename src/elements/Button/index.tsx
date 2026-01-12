import { ButtonHTMLAttributes, JSX, ReactNode } from "react";
import "./style.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

export default function Button(
    { children, ...rest }: ButtonProps,
): JSX.Element {
    return (
        <button className="general-button" {...rest}>
            {children}
        </button>
    );
}
