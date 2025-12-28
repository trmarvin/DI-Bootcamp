// Create a function getDetails that takes a name and age as input and returns a tuple 
// containing the input values and a greeting message.
// The tuple should contain multiple values of different types

function getDetails (name: string, age: number): [string, number, string] {
    return [name, age, `Hello ${name}, you are ${age} years old.`]
}