/* 🌟 Exercise 6 : Fortune teller
Instructions
Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic 
location, job title.
The function should display in the DOM a sentence like "You will be a <job title> in <geographic 
location>, and married to <partner's name> with <number of children> kids." */

((num_kids, partner_name, geo_loc, job_title) => {
  const message = `You will be a ${job_title} in ${geo_loc}, and married to ${partner_name} with ${num_kids} kids.`;
  const p = document.createElement("p");
  p.textContent = message;
  document.body.appendChild(p);
})(3, "Jeff", "Israel", "developer");
