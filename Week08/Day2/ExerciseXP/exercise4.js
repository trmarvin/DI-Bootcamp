// 🌟 Exercice 4 : Volume of a sphere

const submission = document.getElementById('submit');

function sphereVol(radius) {
    return volume = (4/3) * Math.PI * radius ** 3;
}

submission.addEventListener('click', function(event) {
    event.preventDefault();

    let radius = Number(document.getElementById('radius').value);
    let volume = sphereVol(radius);
    document.getElementById('volume').value = volume;
});