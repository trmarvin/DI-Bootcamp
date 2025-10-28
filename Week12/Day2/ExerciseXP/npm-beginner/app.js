/* In app.js, require the chalk package and use it to color and style text in the terminal.
Write a simple script that uses chalk to print a colorful message.
Run app.js using Node.js and observe the colorful output in the terminal. */

import chalk from 'chalk';

console.log(chalk.blue('Hello, world!'));
console.log(chalk.green.bold('Success!'));
console.log(chalk.red.bgYellow('Warning: something went wrong!'));
console.log(chalk.magenta.underline('Have a great day!'));
