// Write a function that takes a number as input and returns a string indicating 
// whether the number is positive, negative, or zero.
// Use if...else statements to control the flow of a program.

function numStatus(num: number) {
    if (num === 0) {
        return "zero";
    }
    else if (num > 0) {
        return "positive";
    }
    else {
        return "negative";
    }
}