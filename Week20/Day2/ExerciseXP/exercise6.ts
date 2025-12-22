/* Define the Object Structure:
Create an object type annotation that defines the shape of a Person object. 
The object should have two properties: name (a string) and age (a number). */

type Person = {
    fullName: string;
    age: number;
};  

/* Create the Function:
Write a function named createPerson that takes two parameters: 
name (string) and age (number).
The function should return an object that matches the Person structure. */

function createPerson(fullName: string, age: number): Person {
    return {
        fullName,
        age
    };
}

/* Test the Function:
Test the createPerson function by creating a person and logging the result to the console. */

const person1 = createPerson("Nathan", 18);
console.log(person1);