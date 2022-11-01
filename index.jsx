const commentForm = (
    <div><h3>LEAVE A COMMENT</h3><hr/>
        <form id="formID">
            <label htmlFor="commentName">Name:</label><br/>
            <input type="text" id="commentName" className="formNameClass"/><br/>
            <label htmlFor="textAreaId">Comment:</label><br/>
            <textarea id="textAreaId" className="commentArea"></textarea><br/>
            <button id="submitB">Submit</button>
        </form> 
    </div>
);
ReactDOM.render(commentForm , document.getElementById("reactDiv"));