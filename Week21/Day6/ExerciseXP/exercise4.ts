function getFirstElement(arr: (number | string)[]): string {
    const firstElement = arr[0];

    return firstElement as string;
}

const mixed1 = ["hello", 42, "world"];
const mixed2 = [100, "typescript", 200];

console.log(getFirstElement(mixed1)); // "hello"
console.log(getFirstElement(mixed2)); // 100 (typed as string!)
