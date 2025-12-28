let sentence = "Broccoli is not that bad, I like it"
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if (wordBad > wordNot && wordNot !== -1 && wordBad !== -1) {
  new_sentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(new_sentence);
} 
else {
  console.log(sentence);
}

let sentence2 = "Fennel is bad, how could you not hate it"
let wordNot2 = sentence2.indexOf("not");
let wordBad2 = sentence2.indexOf("bad");

if (wordBad2 > wordNot2 && wordNot2 !== -1 && wordBad2 !== -1) {
  new_sentence2 = sentence2.slice(0, wordNot2) + "good" + sentence2.slice(wordBad2 + 3);
  console.log(new_sentence2);
} else {
  console.log(sentence2);
}