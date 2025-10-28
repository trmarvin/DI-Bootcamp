/**
 * Create a new Folder - math
 * Create a file math.js
 * create 4 function - multi, divide, plus, minus - 2 inputs parametes (a,b)
 * return the a * b, a / b, a + b, a -b
 * Test these functions
 * create a module from math.js
 * use those functions in app.js/ main.js
 */

const add = (a,b) => {
    return a+b
};

const subtract = (a,b) => {
    return a-b
};

const multiply = (a,b) => {
    return a*b
};

const divide = (a,b) => {
    return a/b
};

export { add, subtract, multiply, divide };