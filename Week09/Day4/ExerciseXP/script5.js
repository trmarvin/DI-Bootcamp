/* 🌟 Exercise 5 : Star Wars
Use the reduce() method to combine all of these into a single string. */

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const combined = epic.reduce((acc, word) => acc + " " + word);

console.log(combined);