function logLength<T extends { length: number }>(value: T): void {
    console.log(value.length);
}