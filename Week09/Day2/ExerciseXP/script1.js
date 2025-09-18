/* 🌟 Exercise 1 : Scope
Instructions
Analyse the code below, and predict what will be the value of a in all the following functions.
Write your prediction as comments in a js file. Explain your predictions. */

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
/*  Prediction: pop-up alert: "inside the funcOne function 3"
    Reason: 5 is greater than 1, so a's value is changed to 3 
 */

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

/*  I don't think it will make a difference because a is declared to be 5 inside the function.
*/

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()

// #2.2 What will happen if the variable is declared 
// with const instead of let ?

/* If const is used its value cannot change. */

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()

// #4.2 What will happen if the variable is declared 
// with const instead of let ?

/*  The function will still return "test" because the scope is local (within the function). */

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?

/*  The code will run the same way, because the condition for which the if-conditional is 
checking remains true, and the local scope of the a inside the conditional is 5. */