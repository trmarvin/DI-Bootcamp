// let addressNumber = 55;
// let addressStreet = "av Bosquet";
// let country = "France";

// let globalAddress = "I live at " + addressNumber + " " + addressStreet + ", " + country;
// console.log(globalAddress);

// let birthYear = 2012;
// let futureYear = 2035;

// let age = futureYear - birthYear;
// console.log("I will be " + age + " in " + futureYear);

// let pets = ["dog", "cat", "fish","rabbit", "cow"];
// console.log(pets[0]);
// pets.push("horse");
// pets.splice(3,1);
// console.log(pets.length);

// let age = prompt("What is your age?");

// if (age < 18) {
//   alert("Sorry, you are too young to drive this car. Powering off");
// } else if (age === 18) {
//   alert("Congratulations on your first year of driving. Enjoy the ride!");
// } else {
//   alert("Powering On. Enjoy the ride!");
// }

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }   
// }

let names = ["john", "sarah", 23, "Rudolf", 34];

for (let i = 0; i < names.length; i++) {
  // Check if it's a string
  if (typeof names[i] !== "string") {
    continue; // skip non-strings
  }

  // Check if first letter is uppercase
  if (names[i][0] !== names[i][0].toUpperCase()) {
    // Make first letter uppercase
    names[i] = names[i][0].toUpperCase() + names[i].slice(1);
  }

  // Display the name
  console.log(names[i]);
}