// ================= Welcome & Skills =================
function welcome() {
    alert("👋 Welcome Asad! Let's Learn Web Development.");
}

function showSkills() {
    alert("My Skills:\n\n✓ HTML\n✓ CSS\n✓ Linux\n✓ Kali Linux\n✓ Cyber Security");
}

// ================= Typing Effect (Hero) =================
const words = ["Cyber Security Student", "Future Ethical Hacker", "Web Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        document.getElementById("typing").textContent = currentWord.substring(0, charIndex++);
    } else {
        document.getElementById("typing").textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1200;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

window.addEventListener("load", typeEffect);

// ================= Matrix Rain Background =================
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);

// ================= Live Terminal Effect =================
const lines = [
    "[+] Initializing System...",
    "[+] Loading Security Modules...",
    "[+] Connecting to Server...",
    "[+] Access Granted",
    "[+] Welcome Asad!",
    "[+] System Ready..."
];

let line = 0;

function terminalEffect() {
    if (line < lines.length) {
        document.getElementById("terminalText").innerHTML += lines[line] + "<br>";
        line++;
        setTimeout(terminalEffect, 1000);
    }
}

terminalEffect();

// ================= Calculator =================
function addValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

// ================= Animated Counter =================
function counter(id, target) {
    let count = 0;
    let speed = 30;

    let update = setInterval(() => {
        count++;
        document.getElementById(id).innerText = count;

        if (count >= target) {
            clearInterval(update);
        }
    }, speed);
}
// Call this wherever you want a number to count up, e.g.:
// counter("projectsCount", 7);
// counter("clientsCount", 5);
// counter("experienceCount", 8);
// counter("visitorCount", 500);

// ================= Scroll To Top =================
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ================= Theme Toggle =================
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeBtn.innerHTML = "☀";
    } else {
        themeBtn.innerHTML = "🌙";
    }
});

// ================= Loader =================
window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});

// ================= Live Clock =================
function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerHTML = now.toLocaleTimeString();
    document.getElementById("date").innerHTML = now.toLocaleDateString();
}
setInterval(updateClock, 1000);
updateClock();

// ================= Weather =================
async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const resultBox = document.getElementById("weatherResult");

    if (!city) {
        resultBox.innerHTML = "Please enter a city name.";
        return;
    }

    resultBox.innerHTML = "Loading...";

    try {
        const response = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=%C+%t`);
        const data = await response.text();
        resultBox.innerHTML = `${city}: ${data}`;
    } catch (error) {
        resultBox.innerHTML = "Could not fetch weather. Try again.";
    }
}

// ================= Notes App (saved in browser localStorage) =================
function saveNote() {
    const note = document.getElementById("noteInput").value;
    localStorage.setItem("myNote", note);
    alert("Note saved!");
}

function loadNote() {
    const note = localStorage.getItem("myNote") || "";
    document.getElementById("noteInput").value = note;
}

function deleteNote() {
    localStorage.removeItem("myNote");
    document.getElementById("noteInput").value = "";
    alert("Note deleted!");
}

// ================= Login (demo only, not real security) =================
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    if (username === "admin" && password === "1234") {
        result.innerHTML = "✅ Login Successful!";
        result.style.color = "lime";
    } else {
        result.innerHTML = "❌ Invalid Username or Password.";
        result.style.color = "red";
    }
}

// ================= To-Do List =================
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

// ================= Password Generator =================
function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";

    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("passwordBox").value = password;
}


