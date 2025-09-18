/* 🌟 Exercise 8 : Juice Bar
Instructions: You will use nested functions, to open a new juice bar.

Part I:
The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, 
medium or large.

The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The 
client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".*/

// const makeJuice = (size) => {
//   const addIngredients = (ing1, ing2, ing3) => {
//     console.log(`The client wants a ${size} juice, containing ${ing1}, ${ing2}, and ${ing3}.`);
//   };

//   addIngredients("mango", "pineapple", "mint");
// };
// makeJuice("medium");


function makeJuice(size) {
  function addIngredients(ing1, ing2, ing3) {
    const sentence = document.createElement("p");
    sentence.textContent = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, and ${ing3}.`;
    const nav = document.getElementById("navbar");
    nav.appendChild(sentence);
  }
  addIngredients("apple", "banana", "carrot");
}

makeJuice("large");

/* Part II:
In the makeJuice function, create an empty array named ingredients.

The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants 
a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then 
invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope. */