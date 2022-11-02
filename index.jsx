const MyCommentSection = () => {
    return(
    <div id="commentDivId"><h3>LEAVE A COMMENT</h3><hr/>
        <form id="formID">
            <label htmlFor="commentName">Name:</label><br/>
            <input type="text" id="commentName" className="formNameClass" placeholder="your name"/><br/>
            <label htmlFor="textAreaId">Comment:</label><br/>
            <textarea id="textAreaId" className="commentArea" placeholder="write here"></textarea><br/>
            <button id="submitButton" onClick={handleSubmit}> Submit </button>
        </form>
        <div id="databaseComments">
        </div>
    </div> 
    )
}

const handleSubmit = () => {

}


const rootNode = document.getElementById("reactDiv");
const root = ReactDOM.createRoot(rootNode);
root.render(<MyCommentSection/>);