import React from 'react';

function Edit({id,commentBody, setCommentBody, setIsHidden, onHandleUpdateComment}){



    function handleChange(event) {
        let updatedComment = event.target.value;
        console.log(updatedComment);
        setCommentBody(updatedComment);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
    
        fetch(`http://localhost:9292/comments/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: commentBody,
          }),
        })
          .then((response) => response.json())
          .then((data) => onHandleUpdateComment(data));
    
        setIsHidden((isHidden) => !isHidden);
        
      }
    return(
        <div>
            <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="comment"
              value={commentBody}
              onChange={handleChange}
              contentEditable={true}
            />
          </div>
          <div>
            <input type="submit" value="Save" />
          </div>
        </form>
        </div>
    )
}
export default Edit;