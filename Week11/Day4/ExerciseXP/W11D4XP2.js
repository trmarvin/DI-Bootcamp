const delayedSuccess = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

// Test
delayedSuccess.then(result => console.log(result));