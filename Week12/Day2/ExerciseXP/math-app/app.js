/* In app.js, require the lodash package and the custom math module.

Use the exported functions from the math module and the utility functions from the lodash package to 
perform calculations.

Run app.js using Node.js and verify that the calculations are correct. */

import _ from "lodash";          
import { add, multiply } from "./math.js";

// Use math functions
const sum = add(10, 5);
const product = multiply(4, 3);

// Use lodash utility functions
const numbers = [sum, product, 42, 7];
const maxNumber = _.max(numbers);
const shuffled = _.shuffle(numbers);

console.log("Sum:", sum);
console.log("Product:", product);
console.log("Max number:", maxNumber);
console.log("Shuffled numbers:", shuffled);
