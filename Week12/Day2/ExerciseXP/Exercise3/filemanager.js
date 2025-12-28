/* 🌟 Exercise 3: File Management using CommonJS syntax
Create a file named fileManager.js.

Inside fileManager.js, define a module that exports functions for reading and writing files.
Export functions named readFile and writeFile. */

// Import the built-in 'fs' (file system) module
import fs from "fs";

// Define a function to read a file
export function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

// Define a function to write to a file
export function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, "utf8");
    console.log("File written successfully!");
  } catch (err) {
    console.error("Error writing file:", err);
  }
}