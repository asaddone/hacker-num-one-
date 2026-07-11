// ==========================================================
// LOADER
// ==========================================================
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) loader.classList.add("hidden");
});

// ==========================================================
// NAV TOGGLE (mobile)
// ==========================================================
const navToggle = document.getElementById("navToggle");
const navRight = document.getElementById("navRight");

if (navToggle && navRight) {
  navToggle.addEventListener("click", () => {
    const isOpen = navRight.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navRight.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navRight.classList.remove("open"));
  });
}

// ==========================================================
// THEME TOGGLE
// ==========================================================
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    themeBtn.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
  });
}

// ==========================================================
// SCROLL TO TOP BUTTON
// ==========================================================
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  if (topBtn) topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================================
// SCROLL HINT -> jump to terminal
// ==========================================================
const scrollHint = document.getElementById("scrollHint");
if (scrollHint) {
  scrollHint.addEventListener("click", () => {
    document.getElementById("terminal-resume")?.scrollIntoView({ behavior: "smooth" });
  });
}

// ==========================================================
// REVEAL ON SCROLL
// ==========================================================
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

// ==========================================================
// SKILL BARS — animate width when visible
// ==========================================================
const bars = document.querySelectorAll(".bar-fill");
if ("IntersectionObserver" in window && bars.length) {
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.width = el.dataset.width + "%";
          barObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.4 }
  );
  bars.forEach((bar) => barObserver.observe(bar));
}

// ==========================================================
// ANIMATED COUNTERS
// ==========================================================
const counters = document.querySelectorAll(".counter");
if ("IntersectionObserver" in window && counters.length) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const duration = 900;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          el.textContent = Math.floor(progress * target);
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target;
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => counterObserver.observe(c));
}

// ==========================================================
// LIVE CLOCK
// ==========================================================
function updateClock() {
  const now = new Date();
  const clockEl = document.getElementById("clock");
  const dateEl = document.getElementById("date");
  if (clockEl) clockEl.textContent = now.toLocaleTimeString();
  if (dateEl) dateEl.textContent = now.toLocaleDateString();
}
setInterval(updateClock, 1000);
updateClock();


// ==========================================================
// PASSWORD GENERATOR
// ==========================================================
function generatePassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < 14; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const box = document.getElementById("passwordBox");
  if (box) box.value = password;
}
window.generatePassword = generatePassword;

// ==========================================================
// NOTES (localStorage)
// ==========================================================
function saveNote() {
  const input = document.getElementById("noteInput");
  if (!input) return;
  localStorage.setItem("asadNote", input.value);
}
function loadNote() {
  const input = document.getElementById("noteInput");
  if (!input) return;
  input.value = localStorage.getItem("asadNote") || "";
}
function deleteNote() {
  localStorage.removeItem("asadNote");
  const input = document.getElementById("noteInput");
  if (input) input.value = "";
}
window.saveNote = saveNote;
window.loadNote = loadNote;
window.deleteNote = deleteNote;

// ==========================================================
// CALCULATOR
// ==========================================================

}  function addValue(value) {
  const display = document.getElementById("display");
  if (display) display.value += value;
}
function clearDisplay() {
  const display = document.getElementById("display");
  if (display) display.value = "";
}
function calculate() {
  const display = document.getElementById("display");
  if (!display) return;
  // Safe-ish arithmetic evaluator: only digits and + - * / . allowed
  const expr = display.value;
  if (!/^[0-9+\-*/.\s]*$/.test(expr)) {
    display.value = "Error";
    return;
  }
  try {
    display.value = Function(`"use strict"; return (${expr})`)();
  } catch {
    display.value = "Error";
  }
}
window.addValue = addValue;
window.clearDisplay = clearDisplay;
window.calculate = calculate;

// ==========================================================
// TO-DO LIST
// ==========================================================
function addTask() {
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");
  if (!input || !list) return;

  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
}
window.addTask = addTask;

// ==========================================================
// SITE SEARCH (projects + skills + sections)
// ==========================================================
const searchIndex = [
  { title: "About", url: "#about", type: "Section" },
  { title: "Skills", url: "#skills", type: "Section" },
  { title: "Projects", url: "#projects", type: "Section" },
  { title: "CTF & Security Writeups", url: "#writeups", type: "Section" },
  { title: "Interactive Labs", url: "#labs", type: "Section" },
  { title: "Contact", url: "#contact", type: "Section" },
  { title: "Terminal Resume", url: "#terminal-resume", type: "Section" },
];

document.querySelectorAll(".project-card").forEach((card) => {
  const title = card.querySelector("h3")?.textContent || "Project";
  searchIndex.push({
    title,
    url: "#projects",
    type: "Project",
    keywords: card.dataset.search || "",
  });
});

const searchInput = document.getElementById("siteSearch");
const searchResults = document.getElementById("searchResults");

function renderSearchResults(query) {
  if (!searchResults) return;
  const q = query.trim().toLowerCase();

  if (!q) {
    searchResults.hidden = true;
    searchResults.innerHTML = "";
    return;
  }

  const matches = searchIndex.filter((item) => {
    const haystack = `${item.title} ${item.keywords || ""}`.toLowerCase();
    return haystack.includes(q);
  });

  searchResults.hidden = false;

  if (!matches.length) {
    searchResults.innerHTML = `<p class="no-results">No matches for "${escapeHtml(query)}"</p>`;
    return;
  }

  searchResults.innerHTML = matches
    .slice(0, 6)
    .map((m) => `<a href="${m.url}"><strong>${escapeHtml(m.title)}</strong> — ${m.type}</a>`)
    .join("");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

if (searchInput) {
  searchInput.addEventListener("input", (e) => renderSearchResults(e.target.value));
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchInput.value = "";
      renderSearchResults("");
      searchInput.blur();
    }
  });

  document.addEventListener("click", (e) => {
    if (searchResults && !searchResults.hidden && !searchResults.contains(e.target) && e.target !== searchInput) {
      searchResults.hidden = true;
    }
  });

  searchResults?.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) {
      searchInput.value = "";
      searchResults.hidden = true;
    }
  });
}

// ==========================================================
// TERMINAL RESUME
// ==========================================================
const termBody = document.getElementById("termBody");
const termInput = document.getElementById("termInput");

const termCommands = {
  help: () =>
    "Available commands:\n  whoami     — quick intro\n  skills     — technical skills\n  projects   — list of projects\n  contact    — how to reach me\n  education  — what I'm studying\n  clear      — clear the terminal",
  whoami: () =>
    "Asad Ali — Cyber Security student learning ethical hacking, Linux,\nnetworking and secure web development. Based in Pakistan.",
  skills: () =>
    "HTML, CSS, JavaScript, Linux (developing)\nCurrently studying: Networking, Kali Linux, OWASP Top 10, CTF practice",
  projects: () =>
    "1. Hacker-Themed Portfolio (this site)\n2.\n3. Password Generator\n4. Notes App\n5. Calculator\n6. To-Do List (in progress)\n\nScroll to the Projects section to see details.",
  contact: () => "Email: your@email.com\nGitHub: github.com/asaddone",
  education: () => "Currently studying Cyber Security, focused on ethical hacking fundamentals.",
};

function printTermLine(text, cls) {
  if (!termBody) return;
  const p = document.createElement("p");
  p.className = "term-line" + (cls ? " " + cls : "");
  p.textContent = text;
  termBody.appendChild(p);
  termBody.scrollTop = termBody.scrollHeight;
}

function runTermCommand(raw) {
  const cmd = raw.trim().toLowerCase();
  printTermLine("asad@portfolio:~$ " + raw, "term-prompt-echo");

  if (!cmd) return;

  if (cmd === "clear") {
    termBody.innerHTML = "";
    return;
  }

  if (termCommands[cmd]) {
    printTermLine(termCommands[cmd]());
  } else {
    printTermLine(`Command not found: ${raw}. Type "help" for a list of commands.`, "term-error");
  }
}

if (termInput) {
  termInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const value = termInput.value;
      termInput.value = "";
      runTermCommand(value);
    }
  });
}

// Focus terminal input when its section is clicked
document.querySelector(".terminal")?.addEventListener("click", () => termInput?.focus());




