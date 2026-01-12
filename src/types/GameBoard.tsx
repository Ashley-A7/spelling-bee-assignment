export type SetWordIs = (
    next: string[] | ((prev: string[]) => string[]),
) => void;

export type Puzzle = {
    centerLetter: string;
    edgeLetters: string[];
};

export type LettersInputTypes = {
    wordIs: string[];
    setWordIs: SetWordIs;
    handleSubmit: () => void;
};

export type LettersSelectionTypes = { puzzle: Puzzle; setWordIs: SetWordIs };

export type GameBoardTypes = {
    puzzle: Puzzle;
    wordIs: string[];
    setWordIs: SetWordIs;
    handleSubmit: () => void;
    errors: string[];
};
