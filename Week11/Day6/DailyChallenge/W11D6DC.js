/* In the JS file, create a program to fetch one random gif depending on the search 
of the user (ie. If the search is “sun”, append on the page one gif with a category 
of “sun”).
The gif should be appended with a DELETE button next to it. Hint : to find the URL 
of the gif, look for the sub-object named “images” inside the data you receive from 
the API.
Allow the user to delete a specific gif by clicking the DELETE button.
Allow the user to remove all of the GIFs by clicking a DELETE ALL button. */

// W11D6DC.js (minimal & robust)

const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

const form = document.getElementById('gifForm');
const input = document.getElementById('categoryInput');
const container = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const tag = input.value.trim();
  if (!tag) return;

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(tag)}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();

    const images = json?.data?.images;
    const imgUrl =
      images?.downsized?.url ||
      images?.original?.url ||
      images?.fixed_height?.url;

    if (!imgUrl) {
      alert(`No GIF found for “${tag}”. Try another term.`);
      return;
    }

    // Create a small card with the GIF + a DELETE button
    const card = document.createElement('div');
    card.style.display = 'inline-flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.margin = '8px';
    card.style.padding = '8px';
    card.style.border = '1px solid #ddd';
    card.style.borderRadius = '8px';

    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = json?.data?.title || tag;
    img.style.maxWidth = '300px';

    const del = document.createElement('button');
    del.type = 'button';
    del.textContent = 'DELETE';
    del.addEventListener('click', () => card.remove());

    card.append(img, del);
    container.prepend(card);

    // Optional UX: keep focus in the input
    input.select();
  } catch (err) {
    console.error(err);
    alert('Error fetching GIF. Check the console for details.');
  }
});

deleteAllBtn.addEventListener('click', () => {
  container.innerHTML = '';
});
