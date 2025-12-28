/* Get the value of each of the inputs in the HTML file when the form is submitted. 
Remember the event.preventDefault()
Make sure the values are not empty */

const nounInput = document.getElementById("noun");
const verbInput = document.getElementById("verb");
const adjectiveInput = document.getElementById("adjective");
const adverbInput = document.getElementById("adverb"); // you don’t have this in HTML right now!
const personInput = document.getElementById("person");
const placeInput = document.getElementById("place");
const storyDisplay = document.getElementById("story");
const form = document.getElementById("libform");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const noun = nounInput.value.trim();
  const verb = verbInput.value.trim();
  const adjective = adjectiveInput.value.trim();
  const person = personInput.value.trim();
  const place = placeInput.value.trim();

  // NOTE: you don’t actually have an <input id="adverb"> in your HTML,
  // so either remove this check or add that input to the form.
  // const adverb = adverbInput.value.trim();

  if (!noun || !verb || !adjective || !person || !place) {
    storyDisplay.textContent = "Please fill out all fields!";
    return;
  }

  const story = `Once upon a time, there was a ${adjective} ${noun} named ${person} who lived in ${place} and loved to ${verb}.`;
  storyDisplay.textContent = story;
});

/* Write a story that uses each of the values.
Make sure you check the console for errors when playing the game. */

// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.