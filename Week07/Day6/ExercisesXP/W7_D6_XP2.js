// 🌟 Exercise 5 : Users

/* Using Javascript:
Retrieve the div and console.log it */

const div = document.getElementById("container");
console.log(div);

// Change the name “Pete” to “Richard”.

let pete = document.querySelector(".list li:nth-child(2)");
pete.innerText = "Richard";

// Delete the second <li> of the second <ul>.
let sarah = document.querySelectorAll(".list")[1].querySelectorAll("li")[1];
sarah.remove();

// Change the name of the first <li> of each <ul> to your name. 
// (Hint : use a loop)

/* without loop version:
document.querySelectorAll(".list")[0].children[0].textContent = "Tamar";
document.querySelectorAll(".list")[1].children[0].textContent = "Tamar"; */

let lists = document.querySelectorAll(".list");

for (let i = 0; i <= 1; i++) {   // or i < 2
  lists[i].children[0].innerText = "Tamar";
}

console.log(lists);

// Add a class called student_list to both of the <ul>'s.
document.querySelectorAll(".list")[0].classList.add("student_list");
document.querySelectorAll(".list")[1].classList.add("student_list");
console.log(lists);

//Add the classes university and attendance to the first <ul>.
document.querySelectorAll(".list")[0].classList.add("university", "attendance");
console.log(lists);

// Add a “light blue” background color and some padding to the <div>.
document.querySelector("#container").style.backgroundColor = "lightblue";
document.querySelector("#container").style.padding = "20px";
console.log(document.body);

// Do not display the <li> that contains the text node “Dan”. 
// (the last <li> of the first <ul>)
document.querySelectorAll(".list")[1].children[2].style.display = "none";
console.log(lists[0]);

// Add a border to the <li> that contains the text node “Richard”. 
// (the second <li> of the <ul>)
document.querySelectorAll(".list")[0].children[1].style.border = "1px solid black";
console.log(lists[0]);

// Change the font size of the whole body.
document.body.style.fontSize = "16px";
console.log(document.body);