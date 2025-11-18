const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const dateText = document.getElementById("date");
const digitalText = document.getElementById("digital");
const soundToggle = document.getElementById("soundToggle");

let ticking = false;

// Simple tick sound
const tickSound = new Audio(
    "https://www.soundjay.com/clock/sounds/clock-ticking-1.mp3"
);
tickSound.volume = 0.4;

// Update Clock
function updateClock() {
    const now = new Date();
    
    let s = now.getSeconds();
    let m = now.getMinutes();
    let h = now.getHours();

    secondHand.style.transform = `translate(-50%, -100%) rotate(${s * 6}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${m * 6 + s * 0.1}deg)`;
    hourHand.style.transform = `translate(-50%, -100%) rotate(${h * 30 + m * 0.5}deg)`;

    if (ticking) tickSound.play();

    // Date
    dateText.textContent = now.toDateString();

    // Digital Time
    digitalText.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

// Sound Toggle
soundToggle.onclick = () => {
    ticking = !ticking;
    soundToggle.textContent = ticking ? "🔊 Sound: ON" : "🔈 Sound: OFF";
};

// Themes
document.querySelectorAll(".theme-buttons button").forEach(btn => {
    btn.onclick = () => {
        document.body.className = btn.dataset.theme + " glow";
    };
});
