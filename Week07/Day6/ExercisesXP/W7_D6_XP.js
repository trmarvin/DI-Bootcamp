// 🌟 Exercise 1 : Find the numbers divisible by 23

function displayNumbersDivisible() {
    let numbers = [];
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            numbers.push(i);
        }
    }
    return numbers;
}

function sumNumbersDivisible() {
    let numbers = displayNumbersDivisible();
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}