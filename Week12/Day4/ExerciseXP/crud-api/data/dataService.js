/* Part 2: Creating a Data Module for Axios
Inside the crud-api directory, create a new directory named data.
Inside the data directory, create a new file named dataService.js.

In dataService.js, import the axios module and create a function named fetchPosts that makes a GET request 
to the JSONPlaceholder API to fetch data for all posts. Export the fetchPosts function. */

import axios from 'axios';

// Define the API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Create a function to fetch all posts
export async function fetchPosts() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    throw error; 
  }
};