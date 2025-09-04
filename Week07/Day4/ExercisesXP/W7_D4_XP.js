const people = ["Greg", "Mary", "Devon", "James"];

console.log(people.splice(0, 1));
console.log(people.splice(2, 1, "Jason"));
console.log(people.push("Tamar"));
console.log(people.indexOf("Mary"));
console.log(people.slice(1, 3));
console.log(people.indexOf("Foo")); // this returns -1 because that's the default value for an item not in the array
let last = people[people.length - 1];
console.log(last);