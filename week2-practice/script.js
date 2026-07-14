// ===== Sound Effects =====
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playSound(type) {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // Sound Settings
    switch (type) {
        case "click":
            oscillator.frequency.setValueAtTime(1000, audioCtx.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + 0.05);
            break;

        case "convert":
            oscillator.frequency.setValueAtTime(1500, audioCtx.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + 0.1);
            break;

        case "clear":
            oscillator.frequency.setValueAtTime(500, audioCtx.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + 0.1);
            break;

        case "error":
            oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + 0.3);
            break;
    }
}

// ===== Button Click =====
function btnClick(value) {
    playSound("click");
    const entry = document.getElementById("entry");

    if (value === "back") {
        entry.value = entry.value.slice(0, -1);
    } else {
        // Prevent multiple dots
        if (value === "." && entry.value.includes(".")) return;
        entry.value += value;
    }
}

// ===== Convert Function =====
function convert() {
    playSound("convert");
    const entry = document.getElementById("entry");
    const result = document.getElementById("result");
    const combo = document.getElementById("combo");

    const value = parseFloat(entry.value);

    if (isNaN(value) || entry.value === "") {
        playSound("error");
        result.textContent = "⚠️ Invalid Input!";
        result.className = "error";
        return;
    }

    if (combo.value === "km-to-miles") {
        const miles = (value * 0.621371).toFixed(2);
        result.textContent = `${value} km = ${miles} miles`;
        result.className = "success";

    } else if (combo.value === "miles-to-km") {
        const km = (value * 1.60934).toFixed(2);
        result.textContent = `${value} miles = ${km} km`;
        result.className = "success";
    }
}

// ===== Clear Function =====
function clearAll() {
    playSound("clear");
    document.getElementById("entry").value = "";
    document.getElementById("result").textContent = "Result will appear here";
    document.getElementById("result").className = "";
    document.getElementById("combo").value = "km-to-miles";
}