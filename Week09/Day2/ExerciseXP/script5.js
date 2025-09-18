/* 🌟 Exercise 5 : Kg and grams
Instructions
Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

First, use function declaration and invoke it.
Then, use function expression and invoke it.
Write in a one line comment, the difference between function declaration and function expression.
Finally, use a one line arrow function and invoke it. */

function kgConvert(x) {
    return x * 1000;
}
console.log(kgConvert(70));

const kgConvert2 = function(y) {
    return y * 1000;
}
console.log(kgConvert2(15));

const kgConvert3 = (z) => z * 1000;
converted = kgConvert3(7);
console.log(converted);

/* A function declaration creates a function that can be called before it's declared, such as at
the top of the document. A function expression (including an arrow function) must be declared 
before it's called because only its variable (and not the function itself) can be hoisted. */

