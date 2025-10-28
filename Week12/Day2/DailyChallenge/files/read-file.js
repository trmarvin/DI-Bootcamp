/* In read-file.js, require the fs module and read the content from the file-data.txt file. 
Display the content in the terminal. */

import fs from 'fs';

// Read the content of file-data.txt asynchronously
fs.readFile('./file-data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Display the file content in the terminal
  console.log('File content:\n');
  console.log(data);
});