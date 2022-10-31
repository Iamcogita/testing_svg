const commentForm = (
    <div>
        <form>
            <label htmlFor="commentName">Name:</label><br/>
            <input type="text" id="commentName" className="formNameClass"/><br/>
            <label htmlFor="textAreaId">Comment:</label><br/>
            <textarea id="textAreaId" className="commentArea"></textarea><br/>
            <button>Submit</button>
        </form> 
    </div>
);

ReactDOM.render(commentForm , document.getElementById("reactDiv"));