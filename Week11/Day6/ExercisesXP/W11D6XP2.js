   const url = `https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=sun&limit10`;
// https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My


// Use Fetch API
fetch(url)
  .then(response => {
    if (!response.ok) {
      // Check if HTTP status is in 200–299 range
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse response into JS object
  })
  .then(data => {
    console.log("Fetched data:", data); // Log the JS object
  })
  .catch(error => {
    console.error("Error fetching data:", error); // Catch and log any errors
  });
