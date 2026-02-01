const quotes = [
    "You make my world softer 💕",
    "Every moment with you matters 🌸",
    "You are my favorite person 💗",
    "I smile whenever I think of you 😊",
    "My heart feels calm with you 🫶",
    "You make ordinary days special ✨"
];

const container = document.getElementById("notes");

const angles = [-6, -3, 3, 6];
const positions = [
    { top: 10, left: 5 },
    { top: 60, left: 25 },
    { top: 20, left: 50 },
    { top: 80, left: 70 },
    { top: 30, left: 80 },
    { top: 90, left: 40 }
];

quotes.forEach((text, index) => {
    const note = document.createElement("div");
    note.className = "note";

    note.style.top = positions[index].top + "px";
    note.style.left = positions[index].left + "%";
    note.style.setProperty("--angle", angles[index % angles.length] + "deg");

    note.innerHTML = `<p>${text}</p>`;
    container.appendChild(note);
});


// Button click event
let noClicks = 0;

const yesBtn = document.getElementById("valentineBtn");
const noBtn = document.getElementById("noBtn");
const bribeOverlay = document.getElementById("bribeOverlay");

noBtn.addEventListener("click", () => {
    noClicks++;

    // Show bribe full screen
    bribeOverlay.style.display = "flex";

    // Shrink NO button
    const noScale = Math.max(0.4, 1 - noClicks * 0.15);
    noBtn.style.transform = `scale(${noScale})`;

    // Grow YES button
    const yesScale = 1 + noClicks * 0.25;
    yesBtn.style.transform = `scale(${yesScale})`;
});
bribeOverlay.addEventListener("click", () => {
    bribeOverlay.style.display = "none";
});


// YES button → love page
yesBtn.addEventListener("click", () => {
    window.location.href = "love.htm";
});


