/* Exercise 4 : Person class
Instructions
Analyze the code below. What will be the output? */

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); 

// object, because John is an instance of the Person class which is an object