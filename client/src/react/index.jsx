import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

const apiURL = "http://localhost:3000/comments";

const fetchComments = async () => {
   const res = await fetch(apiURL);
   return res.json();
}

const MyCommentSection = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => { 
        fetchComments().then(json => {
            setComments(json)
        });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formdata = new FormData(form);
        const username = formdata.get("username");
        const comment = formdata.get("comment");

        const postComment = {
            username,
            comment,
        }

        fetch(apiURL , {
            method: "post",
            body: JSON.stringify(postComment),
            headers: { "Content-type": "application/json" },
        });

        setComments([...comments, postComment])
        form.reset();
    };

    const renderedComments = comments.map((e, index) => 
    <div key={index}>
        <div>{e.username}{" says :"}</div>
        <div style={{paddingTop:"10px"}}>
            {"\""}{e.comment}{"\""}</div>
            <hr/>
    </div>
    );

    return (
        <>
        <div id="commentDivId"><h3>LEAVE A COMMENT</h3><hr/>
            <form id="formID" onSubmit={handleSubmit}>
                <label htmlFor="commentName">Name:</label><br/>
                <input type="text" id="commentName" className="formNameClass" placeholder="your username here" name="username"/><br/>
                <label htmlFor="textAreaId">Comment:</label><br/>
                <textarea id="textAreaId" className="commentArea" placeholder="write your comment here" name="comment"></textarea><br/>
                <button id="submitButton" type="submit"> Submit </button>
            </form>
        </div>
            <div id="databaseComments" className='reactComments'>
                <h3><p>COMMENTS:</p></h3>
                {renderedComments}
            </div>
        </>
    )
}

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

const rootNode = document.getElementById("reactDiv");
const root = ReactDOM.createRoot(rootNode)
root.render(<MyCommentSection/>);