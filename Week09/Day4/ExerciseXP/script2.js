/* 🌟 Exercise 2 : Colors #2
Write a JavaScript program that displays the colors in the following order : 
“1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
Hint : Use the array methods taught in class and ternary operator. */

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
  const position = index + 1;

  // 1st, 2nd, 3rd, everything else 'th'
  const suffix =
    position % 10 === 1 && position % 100 !== 11
      ? ordinal[1]   // "st"
      : position % 10 === 2 && position % 100 !== 12
      ? ordinal[2]   // "nd"
      : position % 10 === 3 && position % 100 !== 13
      ? ordinal[3]   // "rd"
      : ordinal[0];  // "th"

  console.log(`${position}${suffix} choice is ${color}.`);
});