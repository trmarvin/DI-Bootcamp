// Retrieve the form and console.log it.
const form = document.querySelector('form');
console.log(form);

// Retrieve the inputs by their id and console.log them.
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const submitInput = document.getElementById('submit');
console.log(fnameInput, lnameInput, submitInput);

// Retrieve the inputs by their name attribute and console.log them.
const firstnameInput = document.getElementsByName('firstname');
const lastnameInput = document.getElementsByName('lastname');
console.log(firstnameInput, lastnameInput);

/* When the user submits the form (ie. submit event listener)
    - use event.preventDefault(), why ?
    - get the values of the input tags,
    - make sure that they are not empty,
    - create an li per input value,
    - then append them to a the <ul class="usersAnswer"></ul>, below the form. */

form.addEventListener('submit', function(event)     {
    event.preventDefault(); // Prevents the default form submission behavior

    const fnameValue = fnameInput.value.trim();
    const lnameValue = lnameInput.value.trim();
    const ul = document.querySelector('.usersAnswer');

    if (fnameValue === '' || lnameValue === '') {
        alert('Please fill in all fields');
        return;
    } else {
    const li1 = document.createElement('li');
    li1.textContent = fnameValue;
    ul.appendChild(li1);

    const li2 = document.createElement('li');
    li2.textContent = lnameValue;
    ul.appendChild(li2);
}
});

// 🌟 Exercise 3 : Transform the sentence

// Declare a global variable named allBoldItems.
let allBoldItems;

// Create a function called getBoldItems() that takes no parameter. 
// This function should collect all the bold items inside the paragraph and 
// assign them to the allBoldItems variable.
function getBoldItems() {
    allBoldItems = document.querySelectorAll('strong');
}
getBoldItems();

// Create a function called highlight() that changes the color of all the 
// bold text to blue.
function highlight() {
    allBoldItems.forEach(function(item) {
        item.style.color = 'blue';
    });
}

// Create a function called returnItemsToDefault() that changes the color 
// of all the bold text back to black.
function returnItemsToDefault() {
    allBoldItems.forEach(function(item) {
        item.style.color = 'black';
    });
}

// Call the function highlight() on mouseover (ie. when the mouse pointer 
// is moved onto the paragraph), and the function returnItemsToDefault() 
// on mouseout (ie. when the mouse pointer is moved out of the paragraph). 

const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);