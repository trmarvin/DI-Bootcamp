function myAge(myAge) {
  let mumsAge = myAge * 2;
  let dadsAge = mumsAge * 1.2;
  console.log([mumsAge, dadsAge]);
}
myAge(18);

function age2(myAge) {
    let mumsAge2 = myAge * 2;
    return mumsAge2;
}
console.log(age2(18));

// const funcName = () => //statement
const calculator2 = (num1, num2, operator) => {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
}};

console.log(calculator2(10, 5, "+")); 
console.log(calculator2(10, 5, "-")); 
console.log(calculator2(10, 5, "*")); 
console.log(calculator2(10, 5, "/")); 
console.log(calculator2(10, 0, "/")); 

const calculator = (num1, num2, operator) => {
  const operations = {
    "+": num1 + num2,
    "-": num1 - num2,
    "*": num1 * num2,
    "/": num2 !== 0 ? num1 / num2 : "Error: Division by zero"
  };

  return operations[operator] !== undefined 
    ? operations[operator] 
    : "Invalid operator";
};

// Examples
console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5
console.log(calculator(10, 5, "*")); // 50
console.log(calculator(10, 5, "/")); // 2
console.log(calculator(10, 0, "/")); // Error: Division by zero