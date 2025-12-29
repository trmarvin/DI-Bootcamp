function describeValue(value: number | string ): string {
    if (typeof value === 'number') {
        return `This is a number. The number is ${value}`;
    } else {
        return `This is a string. The string is "${value}"`;
    }
}

describeValue(42); // "This is a number. The number is 42"
describeValue("Hello"); // 'This is a string. The string is "Hello"'