import ReactDOM from 'react-dom/client';
import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/stylesheet.css'; 

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

const InteractiveSVG = () => {
  const [color, setColor] = useState("#000"); // Default color
  const svgRef = useRef(null);

  const getRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      0.8)`;
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!svgRef.current) return;
      
      const rect = svgRef.current.getBoundingClientRect();
      const x = Math.min(Math.max(event.pageX - rect.left, 0), rect.width);
      const y = Math.min(Math.max(event.pageY - rect.top, 0), rect.height);

      const color = getRandomColor();
      setColor(color);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className='svg'>
      <h1>MOVEMENT CHANGES THE SVG COLOR FILL</h1>
      <svg 
        ref={svgRef} 
        viewBox="140 20 600 600" 
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <path d="M435,81c10,0,20,0,30,0c2.1,0.5,4.1,1.1,6.2,1.3c39.1,4,73.9,18.5,104.1,43.4c41.9,34.6,66,79,71.8,133.1
							c3,28.1,0.4,55.8-8.6,82.6C606.6,437,509.5,493.6,411.4,474c-29.9-6-57.3-17.9-81.4-36.7c-44.9-35-71-80.8-77.1-137.6
							c-2.7-25.2-1-50.2,6.2-74.6c13.4-45.6,39.5-82.3,78.7-109.4c23.9-16.5,50.3-27.3,79.1-31.9C422.9,82.9,429,82,435,81z M467.9,336.4
							c0.3-10.8-2-32.3-4.2-46.8c-1.2-7.7-4-15.8-7.2-23c-1.8-4.2-6.6-3.8-8.8,0.1c-2.3,4.3-4.5,9.7-6.1,15.6c-1.7,6.3-4.6,24.3-5.4,38.6
							c-1.1,20.8,2.9,57.1,4.1,62.1c1.2,5,3.2,13.1,8.3,18.1c2.4,2.4,3.7,2.4,5.8,0.1s7.1-13.9,8.3-19.9S467.6,348.4,467.9,336.4z
							M311.7,219.5c0.6,4.4,2.7,6.8,8.4,7.7c5.9,1,11.4,1.6,16.5,2.1c2.3,5.9,23.7,7.4,33.3,8.5c9.5,1.1,20.9,4,29.7,8.1
							c5.1,2.3,10,5,15.4,7.8c-9.4-13.9-13.6-29-13.1-45.2c-36.5,0-72.6,0-109.4,0C297.7,215.4,304.9,217.1,311.7,219.5z M501.8,208.2
							c-0.3,16.7-3.8,32-13.6,45.6c5.5-2.8,10.4-5.6,15.5-7.9c14-6.2,29.3-5.4,44-7.9c6-1,13-0.1,16.5-7.1c0.2-0.5,7.5-1.1,10-1.9
							c6.4-1.9,14.8-0.1,17.4-9.2c0.1-0.4,1.1-0.5,1.7-0.7c2.8-1,5.7-1.7,8.2-3.1c3.2-1.8,8.3-5.6,9.1-7.7
							C574.9,208.2,538.1,208.2,501.8,208.2z M431,212.3c-1.5,11.5,10.1,20.6,20,20.9c10.8,0.3,21.8-8.2,21.6-21.6
							c-0.1-11.3-9.3-20.5-20.6-20.6C440.5,190.9,429.9,200.3,431,212.3z M426.8,286.3c-12.6,10.6-22.9,36.5-19.9,50
							c2.9-3.2,5.7-5.5,7.5-8.4c6.6-10.2,12.1-26.6,12.8-30.5S428.3,289.5,426.8,286.3z M498.4,334.8c-2.1-18.3-8-34.4-20.6-48.1
							C471.6,295.6,487.4,332.9,498.4,334.8z" fill={color} />
      </svg>
    </div>
  );
};

const rootNode = document.getElementById("reactDiv");
const root = ReactDOM.createRoot(rootNode)
root.render(
  <>
    <InteractiveSVG/>
    <MyCommentSection/>
  </>
);