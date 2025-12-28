// 🌟 Exercise 1 : Find the numbers divisible by 23

function displayNumbersDivisible() {
    let numbers = [];
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            numbers.push(i);
        }
    }
    return numbers;
}

function sumNumbersDivisible() {
    let numbers = displayNumbersDivisible();
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(displayNumbersDivisible());
console.log(sumNumbersDivisible());

// 🌟 Exercise 2 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

/* Add the stock and prices objects to your js file. */

/* Create an array called shoppingList with the following items: 
“banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange 
and 1 apple in your cart. */

shoppingList = ["banana", "orange", "apple"];

/* Create a function called myBill() that takes no parameters.
/* The function should return the total price of your shoppingList. 
In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.
Bonus: If the item is in stock, decrease the item’s stock by 1 */

function myBill() {
    let total = 0;
    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];
            stock[item]--;
        }
    }
    return total;
}

/* Call the myBill() function. */

console.log(myBill());

// Exercise 3 : What’s in my wallet ?

/* Create a function named changeEnough(itemPrice, amountOfChange) that 
receives two arguments :
an item price
and an array representing the amount of change in your pocket.

In the function, determine whether or not you can afford the item.
If the sum of the change is bigger or equal than the item’s price 
(ie. it means that you can afford the item), the function should return true
If the sum of the change is smaller than the item’s price 
(ie. it means that you cannot afford the item) the function should return false

Change will always be represented in the following order: 
quarters, dimes, nickels, pennies */

function changeEnough(itemPrice, amountOfChange) {
    const changeValues = [0.25, 0.10, 0.05, 0.01];
    let totalChange = 0;

    for (let i = 0; i < amountOfChange.length; i++) {
        totalChange += amountOfChange[i] * changeValues[i];
    }

    return totalChange >= itemPrice;
}

changeEnough(4.25, [25, 20, 5, 0])

// 🌟 Exercise 4 : Vacations Costs

/* Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel. */

function hotelCost() {
    let nights = Number(prompt("How many nights would you like to stay in the hotel?"));
    if (isNaN(nights)) {
        nights = Number(prompt("Please enter a valid number of nights."));
    }
    return nights * 140;
}

console.log("Your total hotel cost is $" + hotelCost());

/* Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$ */

function planeRideCost() {
    let destination = prompt("What is your destination?");
    while (destination === "" || typeof destination !== "string") {
        destination = prompt("Please enter a valid destination.");
    }
    if (destination === "London") {
        return 183;
    } else if (destination === "Paris") {
        return 220;
    } else {
        return 300;
    }
}

let cost = planeRideCost();
console.log("The price of your plane tickets is $" + cost);


/* Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental. */

function rentalCarCost() {
    let days = Number(prompt("How many days would you like to rent the car?"));
    while (isNaN(days) || days <= 0) {
        days = Number(prompt("Please enter a valid number of days."));
    }
    let totalCost = days * 40;
    if (days > 10) {
        totalCost *= 0.95; // Apply 5% discount
    }
    return totalCost;
}

console.log("Your total car rental cost is $" + rentalCarCost());

/* Define a function called totalVacationCost() that returns the total cost of 
the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and 
rentalCarCost() inside the function totalVacationCost().

Call the function totalVacationCost() */

function totalVacationCost() {
    const myHotelCost = hotelCost();
    const myPlaneRideCost = planeRideCost();
    const myRentalCarCost = rentalCarCost();

    return myHotelCost + myPlaneRideCost + myRentalCarCost;
}

console.log("The total cost of your vacation is $" + totalVacationCost());