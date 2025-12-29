function formatInput<T extends { toString(): string }>(input: T): string {
    const stringValue = input.toString() as string;
    return `Formatted Input: ${stringValue}`;
}