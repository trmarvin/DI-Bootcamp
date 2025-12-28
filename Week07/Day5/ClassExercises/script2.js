// For each of the questions, find 2 WAYS of accessing :
// 1. The div DOM node?
console.log(document.firstElementChild);
console.log(document.body.children[0]);

// 2. The ul DOM node?
console.log(document.body.lastElementChild);
console.log(document.body.children[1]);

// 3. The second li (with Pete)?
console.log(document.body.lastElementChild.lastElementChild);