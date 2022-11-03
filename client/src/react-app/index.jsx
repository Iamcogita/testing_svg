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


const rootNode = document.getElementById("reactDiv");
const root = ReactDOM.createRoot(rootNode)
root.render(<MyCommentSection/>);
