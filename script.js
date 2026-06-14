/* ===================================
   AOS INITIALIZATION
=================================== */

AOS.init({
duration:1000,
once:true
});

/* ===================================
   LOADER
=================================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.querySelector(".loader-wrapper").style.opacity="0";

setTimeout(()=>{
document.querySelector(".loader-wrapper").style.display="none";
},500);

},1000);

});

/* ===================================
   NAVBAR SCROLL EFFECT
=================================== */

const navbar=document.querySelector(".custom-navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.classList.add("navbar-scrolled");

}else{

navbar.classList.remove("navbar-scrolled");

}

});

/* ===================================
   PROGRESS BAR
=================================== */

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let height=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

let progress=(scrollTop/height)*100;

document.querySelector(
".progress-bar-custom"
).style.width=progress+"%";

});

/* ===================================
   COUNTER ANIMATION
=================================== */

const counters=
document.querySelectorAll(".counter");

const counterObserver=
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=
+counter.getAttribute("data-target");

let count=0;

const update=()=>{

let increment=target/120;

if(count<target){

count+=increment;

counter.innerText=
Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=
target.toLocaleString()+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* ===================================
   BACK TO TOP BUTTON
=================================== */

const backBtn=
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

backBtn.classList.add("show");

}else{

backBtn.classList.remove("show");

}

});

backBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

/* ===================================
   DARK MODE
=================================== */

const themeToggle=
document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

}

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

}else{

localStorage.setItem("theme","light");

}

});

/* ===================================
   REVEAL ON SCROLL
=================================== */

const reveals=
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(reveal=>{

const top=
reveal.getBoundingClientRect().top;

if(top<window.innerHeight-120){

reveal.classList.add("active");

}

});

});

/* ===================================
   SMOOTH SCROLL
=================================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});

/* ===================================
   TYPING EFFECT
=================================== */

const typingText=
document.querySelector(".typing-text");

if(typingText){

const words=[
"Education",
"Healthcare",
"Empowerment",
"Hope"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

function type(){

let currentWord=
words[wordIndex];

if(!deleting){

typingText.textContent=
currentWord.substring(
0,
charIndex++
);

if(charIndex>
currentWord.length){

deleting=true;

setTimeout(type,1200);

return;
}

}else{

typingText.textContent=
currentWord.substring(
0,
charIndex--
);

if(charIndex===0){

deleting=false;

wordIndex=
(wordIndex+1)%words.length;

}

}

setTimeout(type,120);

}

type();

}

/* ===================================
   CURSOR GLOW EFFECT
=================================== */

const glow=
document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/* ===================================
   NEWSLETTER FORM
=================================== */

const newsletter=
document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",e=>{

e.preventDefault();

const email=
newsletter.querySelector("input");

if(email.value===""){

alert("Please enter email");

return;

}

alert("Thank you for subscribing!");

newsletter.reset();

});

}

/* ===================================
   CONTACT FORM VALIDATION
=================================== */

const contactForm=
document.querySelector("#contactForm");

if(contactForm){

contactForm.addEventListener("submit",e=>{

e.preventDefault();

let valid=true;

contactForm
.querySelectorAll("input,textarea")
.forEach(field=>{

if(field.value.trim()===""){

valid=false;

field.style.border=
"2px solid red";

}else{

field.style.border=
"1px solid #ddd";

}

});

if(valid){

alert(
"Message Sent Successfully!"
);

contactForm.reset();

}

});

}

/* ===================================
   GALLERY FILTER
=================================== */

const filterBtns=
document.querySelectorAll(".filter-btn");

const galleryItems=
document.querySelectorAll(".gallery-item");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

const filter=
btn.getAttribute("data-filter");

galleryItems.forEach(item=>{

if(filter==="all" ||
item.classList.contains(filter)){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

});

/* ===================================
   PARTICLES GENERATOR
=================================== */

for(let i=0;i<20;i++){

const particle=
document.createElement("span");

particle.classList.add("particle");

particle.style.left=
Math.random()*100+"%";

particle.style.width=
particle.style.height=
Math.random()*10+5+"px";

particle.style.animationDuration=
Math.random()*10+5+"s";

document.body.appendChild(particle);

}
const toggleBtn = document.getElementById("themeToggle");

// Check saved theme on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});