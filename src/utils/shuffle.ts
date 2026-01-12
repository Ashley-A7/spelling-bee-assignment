const RANDOM_THRESHOLD = 0.5;
export default function shuffle(array: string[]): string[] {
    return [...array].sort(() => Math.random() - RANDOM_THRESHOLD);
}
