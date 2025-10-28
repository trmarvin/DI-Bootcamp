/* Create another file named app.js.

In app.js, import the array of person objects from the data.js module.
Write a function that calculates and prints the average age of all the persons 
in the array.
Use the imported array and the average age function in app.js.
Run app.js and confirm that the average age is correctly calculated and displayed. */

import { people } from './data.js';

const avgAge = (people) => {
  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  return totalAge / people.length;
};

console.log(`The average age is ${avgAge(people)}.`);
