

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

/* Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. 
Use the forEach method. */

const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit));
};

/* Create another arrow function named cloneGroceries.
In the function, create a variable named user that is a copy of the client variable. (Tip : make the user 
variable equal to the client variable) */

const cloneGroceries = () => {
  let user = client;

/* Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why? 
No, because if you assign one primitive variable to another, you get a copy of the value, not a reference 
to the same memory slot. */
  client = "Betty";

/* In the function, create a variable named shopping that is equal to the groceries variable.
Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object? Why?
Yes, because it's not a primitive variable and therefore does reference the same memory slot. */

  shopping.totalPrice = "35$";

/* Change the value of the paid key to false. Will we also see this modification in the shopping object? Why? Yes
let shopping = groceries; */

  shopping.other.paid = false;
};

/* Invoke the cloneGroceries function. */

cloneGroceries();

