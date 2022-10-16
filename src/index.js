import './style.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";

let url = document.getElementById('url');
let fontSize = document.getElementById('fontSize');
let lineHeight = document.getElementById('lineHeight');
let fontColor = document.getElementById('fontColor');
let button = document.getElementById('button');
let IMG = document.getElementById('img');
let text = document.getElementById('text');
let div = document.getElementById('div');

url.addEventListener('keyup', () =>{
    IMG.src = url.value;
})

fontSize.addEventListener('change', () =>{
    text.style.fontSize = fontSize.value + "px";
})

lineHeight.addEventListener('change', () =>{
    text.style.lineHeight = lineHeight.value + "em";
})

fontColor.addEventListener('change', () => {
    text.style.color = fontColor.value;
})

button.addEventListener('click', () => {
    div.classList.toggle('img-float');
});
