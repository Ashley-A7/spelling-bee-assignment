export default function calculateWordScore(
    word: string,
    centerLetter: string,
    edgeLetters: string[],
): number {
    const puzzleLetters = [centerLetter, ...edgeLetters];
    const wordLetters = word.toLowerCase().split("");

    const missingLettersInPuzzle = puzzleLetters.filter(letter =>
        !wordLetters.includes(letter)
    );
    const isPangram = missingLettersInPuzzle.length === 0;

    const pointsForWord = word.length === 4 ? 1 : word.length;
    const pointsForPangram = isPangram ? 7 : 0;
    const points = pointsForWord + pointsForPangram;

    return points;
}
