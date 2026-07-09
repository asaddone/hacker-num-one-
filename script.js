function welcome() {
alert("script loaded");    alert("👋 Welcome Asad! Let's Learn Web Development.");
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
window.addEventListener("load", typeEffect);
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

terminalEffect(); function addValue(value){
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
document.getElementById("clock").innerHTML = "TEST";


