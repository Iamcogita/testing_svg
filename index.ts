const form = document.getElementById("formID");

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const postComment = {
        name: e.target.name.value,
        comment: e.target.comment.value
    };

    fetch("http://localhost:5500/comments", {
        method: "post",
        body: JSON.stringify(postComment),
        headers: { "Content-type": "application/json" },
    });
}

form?.addEventListener("formID", handleSubmit);
