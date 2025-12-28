/* Create another file named shop.js.
In shop.js, require the product objects from the products.js module. */

const products = require("./products");

/* Create a function that takes a product name as a parameter and searches for the 
corresponding product object. */

findProduct = (productName) => {
    return products.find(item => item.name === productName);
}

/* Call this function with different product names and print the details of the products.
Run shop.js and verify that the correct product details are displayed. */

console.log(findProduct("sofa"));
console.log(findProduct("chair"));
console.log(findProduct("table"));