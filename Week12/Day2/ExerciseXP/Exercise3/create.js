/* Implement the readFile function to read the content of a specified file using the fs module.
Implement the writeFile function to write content to a specified file using the fs module.

Create a file “Hello World.txt” containing the sentence “Hello World !! “
Create a file “Bye World.txt” containing the sentence “Bye World !! “ */

// Create the files
writeFile("Hello World.txt", "Hello World !! ");
writeFile("Bye World.txt", "Bye World !! ");

// Read and print their contents
const helloText = readFile("Hello World.txt");
const byeText = readFile("Bye World.txt");

console.log("Contents of Hello World.txt:", helloText);
console.log("Contents of Bye World.txt:", byeText);