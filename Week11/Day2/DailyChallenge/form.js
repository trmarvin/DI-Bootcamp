const form = document.getElementById("nameForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const first = document.getElementById("firstName").value.trim();
  const last = document.getElementById("lastName").value.trim();

  const data = { firstName: first, lastName: last };

  const p = document.createElement("p");
  p.textContent = JSON.stringify(data);
  document.body.appendChild(p);
});