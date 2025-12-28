import { greet } from './greeting.js';
import chalk from 'chalk';
import { readFile } from './files/read-file.js';

// Use the greet function
const greetingMessage = greet("Tamar");
console.log(chalk.blueBright.bold(greetingMessage));

// Display a colorful message (from colorful-message.js logic)
const colorfulMessage = chalk.magenta("You’ve completed the Node.js module challenge!");
console.log(colorfulMessage);

// Read and display the file’s content
readFileAndDisplay();
