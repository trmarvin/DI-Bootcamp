/* 🌟 Exercise 1: Multiple Exports and Import using CommonJS syntax
Create a file named products.js.
Inside products.js, create an array of objects, each representing a product with 
properties like name, price, and category.
Export this array using the Common JS syntax. */

const products = [
    {name: "sofa", price: 1000, category: "living"},
    {name: "bed", price: 500, category: "bedroom"},
    {name: "chair", price: 150, category: "dining"}
];

module.exports = products;