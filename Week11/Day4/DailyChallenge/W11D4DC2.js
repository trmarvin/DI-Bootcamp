const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`


function toJs(jsonStr) {
  return new Promise((resolve, reject) => {
    try {
      const obj = JSON.parse(jsonStr);
      if (Object.keys(obj).length === 0) {
        return reject("Empty Morse object");
      }
      resolve(obj);
    } catch {
      reject("Invalid JSON string");
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:") || "";
    const input = userInput.toLowerCase();

    const morseArr = [];

    for (const char of input) {
      if (char === " ") {
        morseArr.push(" / ");        // word separator (optional)
        continue;
      }
      const code = morseJS[char];
      if (!code) {
        return reject(`Character "${char}" not found in Morse code dictionary.`);
      }
      morseArr.push(code);
    }

    resolve(morseArr);
  });
}

function joinWords(morseTranslation) {
  const output = morseTranslation.join("<br>");
  let container = document.getElementById("morse-output");
  if (!container) {
    container = document.createElement("div");
    container.id = "morse-output";
    document.body.appendChild(container);
  }
  container.innerHTML = `<h3>Morse Translation</h3>${output}`;
}

toJs(morseJSON)
  .then(toMorse)
  .then(joinWords)
  .catch(err => console.error("Error:", err));
