/* In read-directory.js, use the fs module to read the list of files in a specified directory and display 
their names in the terminal.

Open a terminal in the file-explorer directory.
Run node copy-file.js to copy the content from source.txt to destination.txt.
Run node read-directory.js to list the files in the directory. */

import fs from 'fs';

// Path to the directory 
const directoryPath = './file-explorer';

// Read the directory contents
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  console.log('Files in directory:');
  files.forEach(file => {
    console.log(file);
  });
});
