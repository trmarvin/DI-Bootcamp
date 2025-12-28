/* Create an array which value is the planets of the solar system.
For each planet in the array, create a <div> using createElement. This div should 
have a class named "planet".
Each planet should have a different background color. (Hint: you could add a new 
class to each planet - each class containing a different background-color).
Finally append each div to the <section> in the HTML (presented below). */

const planets = [
    { name: 'mercury', bg: "purple" },
    { name: 'venus', bg: "orange" },
    { name: 'earth', bg: "green" },
    { name: 'mars', bg: "red" },
    { name: 'jupiter', bg: "brown" },
    { name: 'saturn', bg: "gold" },
    { name: 'uranus', bg: "lightblue" },
    { name: 'neptune', bg: "darkblue" }
];

const section = document.querySelector('.listPlanets');

for (let planet of planets) {
    let planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.style.backgroundColor = planet.bg;
    planetDiv.textContent = planet.name;
    section.appendChild(planetDiv);
}
