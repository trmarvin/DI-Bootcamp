/* Using an arrow function, create a calculator that returns the result of the operation 
based on the given operator: +, -, *, or /.

The function should accept two numbers as parameters and return the correct calculation 
result.

Bonus: Modify your function to use a ternary operator to handle cases where the operator 
is not valid, returning "Invalid operator" instead of performing a calculation. */

const calculator = (num1, num2, operator) => {
    return operator === '+' ? num1 + num2 :
           operator === '-' ? num1 - num2 :
           operator === '*' ? num1 * num2 :
           operator === '/' ? num2 !== 0 ? num1 / num2 : "Cannot divide by zero" :
           "Invalid operator";
}

console.log(calculator(10, 5, '+')); 
console.log(calculator(10, 5, '-')); 
console.log(calculator(10, 5, '*'));
console.log(calculator(10, 5, '/')); 
console.log(calculator(10, 0, '/'));
console.log(calculator(10, 5, '#'));
console.log(calculator(10, 0, '&'));