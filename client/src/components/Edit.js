import React from "react";

function Edit({ id, commentBody, setCommentBody, setIsHidden, onHandleUpdateComment }) {
  function handleChange(event) {
    let updatedComment = event.target.value;
    setCommentBody(updatedComment);
  }

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();

    fetch(`/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_comment: commentBody,
      }),
    })
      .then((response) => response.json())
      // .then((data) => {
      //   console.log(data);
      //   console.log(commentBody);
      // });
    
    .then((data) => onHandleUpdateComment(data));

    setIsHidden((isHidden) => !isHidden);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="user_comment"
            value={commentBody}
            onChange={handleChange}
            contentEditable={true}
          />
        </div>
        <br />
        <div>
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
}
export default Edit;
