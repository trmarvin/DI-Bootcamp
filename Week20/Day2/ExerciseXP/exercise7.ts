// Get an Element from the DOM:Use document.getElementById() to retrieve an HTML 
// element from the DOM.

const element = document.getElementById("myElement");
console.log(element);

//Use Type Assertion: Apply a type assertion to cast the element to a specific HTML 
// element type, such as HTMLInputElement.

const input = document.getElementById("username") as HTMLInputElement;

// Access the Element’s Properties: Once cast, use the properties of the specific 
// element type, like setting the value of an input element.

input.value = "Nathan";

//Test the Functionality: Ensure that you can successfully set or manipulate a property 
// of the element.

console.log(input.value);
