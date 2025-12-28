// one loop
let star = "*";
while (star.length <= 5) {
  console.log(star);
  star += "*";
}

// nested loops
for (let row = 1; row <= 5; row++) {
  let stars = "";
  for (let col = 1; col <= row; col++) {
    stars += "*";
  }
  console.log(stars);
}