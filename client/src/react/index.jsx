import ReactDOM from 'react-dom/client';
import React, { useState, useRef, useEffect } from 'react';
import YourSVG from '../assets/andro.svg';
import styles from '../styles/stylesheet.css'

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
        <hr/>
        <div>{e.username}{" says :"}</div>
        <div style={{paddingTop:"10px"}}>
            {"\""}{e.comment}{"\""}</div>
            
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

let orderCounter = 0;
function orderDivs(){
    orderCounter ++;
    let firstDiv = document.getElementsByClassName("divs")[0];
    firstDiv.remove();
    svgDivContainer.append(firstDiv);
}
const svgDivContainer = document.getElementsByClassName("buttoncontainer")[0];
const button03 = document.getElementById("b03");
button03.addEventListener("click" , () => {
    orderDivs();
    if(orderCounter == 3)
        {orderCounter = 0}
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
        duration: 700,
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
    if(orderCounter != 0){
        orderDivs();
        if(orderCounter == 2){
            orderDivs();
        }
        orderCounter = 0;
    }  
});

function InteractiveSVG() {
    const [isMouseControlled, setMouseControlled] = useState(true);
    const svgRef = useRef(null);
    const maskRefs = useRef([]);
  
    useEffect(() => {
      if (!svgRef.current || maskRefs.current.length === 0) return;
      
      const getRandomColor = () => {
        return `rgb(${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)})`;
      };

      if (!isMouseControlled) {
        const intervalId = setInterval(() => {
          const rect = svgRef.current.getBoundingClientRect();
          const randomY = Math.random() * rect.height;
          const randomX = Math.random() * rect.width;
          const color = getRandomColor(); 
  
          maskRefs.current.forEach((mask, index) => {
            if (mask) {
              const transitionTime = `${(0.25 * index + 1) * 350}ms`;
              const userAgent = window.navigator.userAgent;
              const isSafari = userAgent.indexOf("Safari") > -1 && !(userAgent.indexOf("Chrome") > -1 || userAgent.indexOf("Chromium") > -1);
              mask.style.transition = isSafari 
                ? `background-color linear ${transitionTime}`
                : `transform ease-out ${transitionTime}, background-color linear ${transitionTime}`;
              mask.style.transform = `translate(${randomX}px, ${randomY}px)`;
              mask.style.background = color;
            }
          });
        }, 4000);
  
        return () => clearInterval(intervalId);
      }
    }, [isMouseControlled]);
  
    useEffect(() => {
      if (!svgRef.current || maskRefs.current.length === 0) return;
  
      const handleMouseMove = (event) => {
        setMouseControlled(false);
        const rect = svgRef.current.getBoundingClientRect();
        const x = Math.min(Math.max(event.pageX - rect.left, 0), rect.width);
        const y = Math.min(Math.max(event.pageY - rect.top, 0), rect.height);
        const color = getRandomColor();
  
        maskRefs.current.forEach(mask => {
          if (mask) {
            mask.style.transform = `translate(${x}px, ${y}px)`;
            mask.style.background = color;
          }
        });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    return (
      <div className={styles.container} ref={svgRef}>
        <YourSVG className={styles.svg} />
        {[0, 1, 2].map((_, index) => (
          <div 
            key={index} 
            className={`${styles.mask} ${styles[`mask${index + 1}`]}`} 
            ref={el => { maskRefs.current[index] = el; }}
          />
        ))}
      </div>
    );
};

const introRoot = document.getElementById("intro");
const intro = ReactDOM.createRoot(introRoot);
intro.render(<InteractiveSVG/>);

const rootNode = document.getElementById("reactDiv");
const root = ReactDOM.createRoot(rootNode)
root.render(<MyCommentSection/>);