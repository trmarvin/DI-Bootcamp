// 🌟 Exercise 1 : List of people

const people = ["Greg", "Mary", "Devon", "James"];

console.log(people.splice(0, 1));
console.log(people.splice(2, 1, "Jason"));
console.log(people.push("Tamar"));
console.log(people.indexOf("Mary"));
console.log(people.slice(1, 3));
console.log(people.indexOf("Foo")); // this returns -1 because that's the default value for an item not in the array
let last = people[people.length - 1];
console.log(last);

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
  if (people[i] === "Devon") {
    break;
  }
  console.log(people[i]);
}

// 🌟 Exercise 2 : Your favorite colors

const colors = ["lavender", "mustard", "rust", "teal", "gray"]
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Bonus
const suffixes = ["st", "nd", "rd", "th"];

for (let i = 0; i < colors.length; i++) {
  let number = i + 1;
  let suffix;

  if (number === 1) {
    suffix = suffixes[0]; 
  } else if (number === 2) {
    suffix = suffixes[1]; 
  } else if (number === 3) {
    suffix = suffixes[2]; 
  } else {
    suffix = suffixes[3]; 
  }

  console.log(`My ${number}${suffix} choice is ${colors[i]}.`);
}

// 🌟 Exercise 3 : Repeat the question

let number = prompt("Choose a number");

if (typeof number === "number") {
  console.log("You entered a number.");
} else {
  console.log("That's not a number.");
}

while (number < 10) {
  number = prompt("Choose a number");
}

// 🌟 Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// 1) Number of floors
console.log(building.numberOfFloors);

// 2) Apartments on floors 1 and 3 (sum)
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

// 3) Second tenant's name + number of rooms
console.log(
  building.nameOfTenants[1], 
  building.numberOfRoomsAndRent[building.nameOfTenants[1].toLowerCase()][0]
);            // "Dan 4"

// 4) If Sarah + David rent > Dan’s rent, raise Dan to 1200
if (
  building.numberOfRoomsAndRent.sarah[1] +
  building.numberOfRoomsAndRent.david[1] >
  building.numberOfRoomsAndRent.dan[1]
) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log(building.numberOfRoomsAndRent.dan[1]);

// 🌟 Exercise 5 : Family

const family = {
    father: "Jeff",
    mother: "Tamar",
    son1: "Nathan",
    son2: "Ronen",
    son3: "Daniel",
}


// Exercise 6 : Rudolf

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

for (let key in details) {
  console.log(key);
  console.log(details[key]);
}

// Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let initials = [];
for (let i = 0; i < names.length; i++) {
  let name = names[i];
  initials.push(name[0]);
}
initials.sort();
let secretName = initials.join('');
console.log(secretName);

// with map method:
// let initials = names.map(name => name[0]);
// initials.sort();
// let secretName = initials.join('');
// console.log(secretName);