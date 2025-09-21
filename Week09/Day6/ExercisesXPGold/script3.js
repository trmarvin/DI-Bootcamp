/* Exercise 3 : Counter class 

Analyze the code below, what will be the output? */

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);

/* Result is 3 because this.count is updated on each call and is called twice (=2), then is fed into
CounterTwo and incremented again (= 3). */