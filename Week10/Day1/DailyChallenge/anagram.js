/* Create a function that:

takes in two strings as two parameters
and returns a boolean that indicates whether or not the first string is an anagram of the second string.

Do we need to consider whitespace?
Trim whitespace prior to comparison. */

function stringPrep(str) {
  return str
    .toLowerCase()   
    .split(" ")
    .join("");     
}

function areAnagrams(a, b) {
  const A = stringPrep(a);
  const B = stringPrep(b);
  if (A.length !== B.length) return false;
  return [...A].sort().join("") === [...B].sort().join("");
}

const firstString = prompt("Enter the first string:");
const secondString = prompt("Enter the second string:");

if (areAnagrams(firstString, secondString)) {
  alert("They are anagrams!");
} else {
  alert("These are not anagrams.");
}