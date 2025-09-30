// Use the reduce() method to sum up all the calories of every desert, 
// except Apple Pie.
// The output should be 85

let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]

const sum = party.reduce((sum, item) => log(item).desert != "AppliePie"? sum+item.calories : sum, 0);
console.log(sum);