/* 🌟 Exercise 2: Advanced Module Usage using ES6 module syntax
Create a file named data.js.
Inside data.js, define an array of objects, each representing a person with 
properties like name, age, and location.

Export the array using the ES6 module syntax. */

const people = [
  { name: "Sarah", age: 35, location: "Haifa" },
  { name: "Isaac", age: 40, location: "New York" },
  { name: "Miriam", age: 45, location: "Tel Aviv" }
];

export { people };