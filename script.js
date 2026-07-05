function welcome() {
    alert("👋 Welcome Asad! Let's Learn Web Development.");
}

function showSkills() {
    alert("My Skills:\n\n✓ HTML\n✓ CSS\n✓ Linux\n✓ Kali Linux\n✓ Cyber Security");
}
const text = "Cyber Security Student | Future Ethical Hacker";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = typeEffect;
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for(let i = 0; i < columns; i++){
    drops[i] = 1;
}

function draw(){
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";

    for(let i = 0; i < drops.length; i++){
        const text = letters[Math.floor(Math.random()*letters.length)];
        ctx.fillText(text, i*fontSize, drops[i]*fontSize);

        if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw,33)

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
        document.getElementById("terminalText").innerHTML +=
        lines[line] + "<br>";
        line++;
        setTimeout(terminalEffect, 1000);
    }
}

terminalEffect();
function addValue(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate(){
    try{
        document.getElementById("display").value =
        eval(document.getElementById("display").value);
    }catch{
        document.getElementById("display").value = "Error";
    }
}
function login(){

    const user = document.getElementById("username").value;

    const pass = document.getElementById("password").value;

    if(user==="asad" && pass==="1234"){
        document.getElementById("result").innerHTML="✅ Login Successful";
    }else{
        document.getElementById("result").innerHTML="❌ Invalid Username or Password";
    }

}
function addTask(){

    const input = document.getElementById("taskInput");

    if(input.value.trim() === ""){
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.textContent = input.value;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function generatePassword(){

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    for(let i=0; i<12; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("passwordBox").value = password;
}
functionupdateClock();{

    let now = new Date();

    let hours = String(now.getHours()).padStart(2,'0');
    let minutes = String(now.getMinutes()).padStart(2,'0');
    let seconds = String(now.getSeconds()).padStart(2,'0');

    document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds;
}

setInterval(updateClock,1000);
updateClock;function updateDate() {
    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", options);
}

updateDate();

function saveNote(){
    let note=document.getElementById("noteInput").value;
    localStorage.setItem("myNote",note);
    alert("✅ Note Saved");
}

function loadNote(){
    document.getElementById("noteInput").value=
    localStorage.getItem("myNote") || "";
}

function deleteNote(){
    localStorage.removeItem("myNote");
    document.getElementById("noteInput").value="";
    alert("🗑️ Note Deleted");
}
let count = localStorage.getItem("visitorCount") || 0;
count++;
localStorage.setItem("visitorCount", count);

document.getElementById("visitorCount").innerText = count;

function counter(id,target){
    let count=0;
    let speed=30;

    let update=setInterval(()=>{
        count++;
        document.getElementById(id).innerText=count;

        if(count>=target){
            clearInterval(update);
        }
    },speed);
}



function topFunction(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
const words = [
    "Web Developer",
    "Frontend Developer",
    "Cyber Security Student",
    "Programmer"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect(){

    currentWord = words[i];

    if(!isDeleting){
        document.getElementById("typing").textContent =
        currentWord.substring(0,j++);
    }else{
        document.getElementById("typing").textContent =
        currentWord.substring(0,j--);
    }

    let speed = isDeleting ? 50 : 100;

    if(!isDeleting && j === currentWord.length + 1){
        speed = 1200;
        isDeleting = true;
    }

    if(isDeleting && j === 0){
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        themeBtn.innerHTML="☀";
    }else{
        themeBtn.innerHTML="🌙";
    }

});

window.addEventListener("load",function(){

    document.getElementById("loader").style.display="none";

});
