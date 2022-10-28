
const divcss01 = document.getElementsByClassName("divs")[0];
const divcss02 = document.getElementsByClassName("divs")[1];
const divcss03 = document.getElementsByClassName("divs")[2];

let getRandomInt = () => Math.floor(Math.random() * 255);
let newBgColor = () => "rgb(".concat(getRandomInt()).concat("+"+getRandomInt()).concat("+"+getRandomInt()+")");
let getRandomRadius = () => Math.floor(Math.random() * 100);
let newRadius = () => getRandomRadius()+"%" ;

const button01 = document.getElementById("b01");
button01.addEventListener("click" , () => {
    let newColor = newBgColor();
    divcss01.style.backgroundColor = newColor;
    divcss02.style.backgroundColor = newColor;
    divcss03.style.backgroundColor = newColor;
});

const button02 = document.getElementById("b02");
button02.addEventListener("click" , () => {
    let radius = newRadius();
    divcss01.style.borderRadius = radius ; 
    divcss02.style.borderRadius = radius ;  
    divcss03.style.borderRadius = radius ;   
});

const button03 = document.getElementById("b03");
button03.addEventListener("click" , () => {
    
});

const button04 = document.getElementById("b04");
const button05 = document.getElementById("b05");
const button06 = document.getElementById("b06");
const button07 = document.getElementById("b07");

button07.addEventListener("click" , () => {
    if(divcss01.getAttribute("style")){
        divcss01.removeAttribute("style");
        divcss02.removeAttribute("style");
        divcss03.removeAttribute("style");
    }
});





