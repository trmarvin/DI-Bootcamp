/* 🌟 Exercise 7 : Welcome
Instructions
John has just signed in to your website and you want to welcome him.

Create a Navbar in your HTML file.
In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just 
signed in.
The function should add a div in the nabvar, displaying the name of the user and his profile picture. */

((user_name) => {
  const nav = document.getElementById("navbar");

  // profile pic
  const img = document.createElement("img");
  img.src = "https://img.jpg"; 
  img.alt = user_name;

  // username <p>
  const name = document.createElement("p");
  name.textContent = user_name;

  nav.appendChild(img);
  nav.appendChild(name);
})("trmarvin");

