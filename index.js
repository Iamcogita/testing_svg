
const divcss01 = document.getElementsByClassName("divs")[0];
const divcss02 = document.getElementsByClassName("divs")[1];
const divcss03 = document.getElementsByClassName("divs")[2];
const divArr = [divcss01,divcss02,divcss03];

let getRandomInt = () => Math.floor(Math.random() * (255 - 80 ) + 80);
let newBgColor = () => "rgb(".concat(getRandomInt()).concat("+"+getRandomInt()).concat("+"+getRandomInt()+")");
const button01 = document.getElementById("b01");
button01.addEventListener("click" , () => {
    let newColor = newBgColor();
    divArr.forEach(e=>e.style.backgroundColor = newColor);
});

let getRandomRadius = () => Math.floor(Math.random() * 60);
let newRadius = () => getRandomRadius()+"%" ;
const button02 = document.getElementById("b02");
button02.addEventListener("click" , () => {
    let radius = newRadius();
    divArr.forEach(e=>e.style.borderRadius = radius);
});

const svgDivContainer = document.getElementsByClassName("buttoncontainer")[0];
const button03 = document.getElementById("b03");
button03.addEventListener("click" , () => {
    let firstDiv = document.getElementsByClassName("divs")[0];
    firstDiv.remove();
    svgDivContainer.append(firstDiv);
});

let randomPixels1 = () => Math.floor(Math.random()*20)+"px";
let randomPixels2 = () => Math.floor(Math.random()*(20+20)-20)+"px";
let randomShadow = () => `drop-shadow(${randomPixels2()} ${randomPixels2()} ${randomPixels1()} rgba(0,0,0,${Math.random()}))`;
const button04 = document.getElementById("b04");
button04.addEventListener("click" , () => {
    let newShadow = randomShadow();
    divArr.forEach(e=>e.style.setProperty("filter", newShadow));
});

const button05 = document.getElementById("b05");
button05.addEventListener("click" , () => {
    let jumpAnimation = [
        {transform : "translateY(0px)"},
        {transform : "translateY(-25px)"},
        {transform : "translateY(0px)"}
    ];
    let animationtime = {
        duration: 500,
        iterations: 1
    };
    divArr.forEach(e=>e.animate(jumpAnimation,animationtime));
    }
);

const button06 = document.getElementById("b06");
button06.addEventListener("click" , () => {
    let rotateAnimation = [
        {transform : "rotate(360deg)"}
    ];
    let animationtime = {
        duration: 800,
        iterations: 1
    };
    divArr.forEach(e=>e.animate(rotateAnimation,animationtime));
    }
);

const button07 = document.getElementById("b07");
button07.addEventListener("click" , () => {
    if(divcss01.getAttribute("style") || svgDivContainer.getAttribute("style") ){
        svgDivContainer.removeAttribute("style");
        divArr.forEach(e => e.removeAttribute("style"));
    }
});