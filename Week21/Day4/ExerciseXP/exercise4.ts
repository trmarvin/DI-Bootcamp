class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }
}
    
    const sum = Calculator.add(5, 3);
    const difference = Calculator.subtract(10, 4);

    console.log(`Sum: ${sum}`); // Output: Sum: 8
    console.log(`Difference: ${difference}`); // Output: Difference: 6  
