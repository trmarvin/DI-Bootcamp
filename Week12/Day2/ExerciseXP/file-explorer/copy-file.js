/* In copy-file.js, use the fs module to read the content from a file named source.txt 
and then write the same content \to a new file named destination.txt. */

import fs from 'fs';

// Read from source.txt
fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Write to destination.txt
  fs.writeFile('destination.txt', data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }

    console.log('File copied successfully!');
  });
});
