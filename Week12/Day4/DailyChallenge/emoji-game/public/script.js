// Using a form, present the player with the random emoji and multiple choice options (including the correct name).

let currentRound = null;

 async function loadRound() {
    const res = await fetch("/api/round");
    currentRound = await res.json();

    // show emoji
    document.getElementById("emoji").textContent = currentRound.emoji;

    // build radio options
    const optsDiv = document.getElementById("options");
    optsDiv.innerHTML = "";
    currentRound.options.forEach((name, idx) => {
        const id = `opt-${idx}`;
        const wrapper = document.createElement("div");
        wrapper.className = "row";
        wrapper.innerHTML = `
    <input type="radio" id="${id}" name="choice" value="${name}">
    <label for="${id}">${name}</label>
    `;
        optsDiv.appendChild(wrapper);
    });

    // reset UI
    document.getElementById("result").textContent = "";
}

document.getElementById("guess-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const choice = data.get("choice");
    const result = document.getElementById("result");

    if (!choice) {
        result.textContent = "Please pick an option.";
        return;
    }

    const correct = choice === currentRound.correctAnswer;
    result.textContent = correct ? "✅ Correct!" : `❌ Nope — it was “${currentRound.correctAnswer}”.`;
});

document.getElementById("next").addEventListener("click", loadRound);

// initial
loadRound();