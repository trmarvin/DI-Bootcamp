/* Exercise 3 : Analyzing
Instructions
Analyze these pieces of code before executing them. What will be the outputs ? */

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// ["bread", "carrot", "potato", "chicken", "apple", "orange"] 
// because all of the array vegetables is added by ...vegetables, or fruits is added by ...fruits

const country = "USA";
console.log([...country]);

// ["U", S"", "A"] because the string is dismantled by character


let newArray = [...[,,]];
console.log(newArray);

// [undefined, undefined] because there are two empty characters inside [,,]