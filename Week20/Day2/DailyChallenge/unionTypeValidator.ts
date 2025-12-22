/* Create a function called validateUnionType(value: any, allowedTypes: string[]): 
boolean that takes a value and an array of allowed types (as strings). The function 
should return true if the value is one of the allowed types; otherwise, it should 
return false. Demonstrate its usage by validating variables with different types. */

function validateUnionType(value: any, allowedTypes: string[]): boolean {
    return allowedTypes.includes(typeof value);
}

const value1 = "Hello";
const value2 = 42;
const value3 = true;

console.log(validateUnionType(value1, ["string", "number"]));
console.log(validateUnionType(value2, ["string"]));
console.log(validateUnionType(value3, ["boolean"]));
console.log(validateUnionType(value3, ["string", "number"]));