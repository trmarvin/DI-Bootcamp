/* Create another file named app.js.

In app.js, import the functions from the fileManager.js module.
Use the imported functions to read the content of the “Hello World.txt” text file and then write to 
the “Bye World.txt” with the content “Writing to the file”.

Run app.js and verify that the file reading and writing operations are successful. */

import { readFile, writeFile } from "./filemanager.js";

// Step 1: Read the content of "Hello World.txt"
const helloContent = readFile("Hello World.txt");
console.log("Contents of Hello World.txt:", helloContent);

// Step 2: Write new content to "Bye World.txt"
writeFile("Bye World.txt", "Writing to the file");

// Step 3 (optional): Verify it worked by reading "Bye World.txt"
const byeContent = readFile("Bye World.txt");
console.log("Contents of Bye World.txt:", byeContent);
