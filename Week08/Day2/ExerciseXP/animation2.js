/* use setInterval to move the <div id="animate"> to the right side of the 
<div id="container">, when the button is clicked on.

The <div id="animate"> should move 1px to the right every milisecond, until it 
reaches the end of the <div id="container">.

Hint : use clearInterval as soon as the box reaches the right end side of the container
Hint : check out the demonstration in the Course Noted named JS Functions */

let moveId = null;

function myMove() {
  const container = document.getElementById('container');
  const box = document.getElementById('animate');

  // If user clicks again, stop any previous animation
  if (moveId !== null) clearInterval(moveId);

  // Start from current position (or 0 if unset)
  let pos = box.offsetLeft || 0;

  // Rightmost position inside the container:
  const max = container.clientWidth - box.clientWidth; // 400 - 50 = 350

  // Ensure we start with a defined left position
  box.style.left = pos + 'px';

  // Move 1px every millisecond
  moveId = setInterval(() => {
    if (pos >= max) {
      clearInterval(moveId);
      moveId = null;
    } else {
      pos += 1;
      box.style.left = pos + 'px';
    }
  }, 1);
}
