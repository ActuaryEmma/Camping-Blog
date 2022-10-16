import React from 'react';

function Edit({id,commentBody, setCommentBody, setIsHidden}){



    function handleChange(event) {
      // setCommentBody({[event.target.name]: event.target.value})

        let updatedComment = event.target.value;
        console.log(updatedComment);
        setCommentBody(updatedComment);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
    
        fetch(`/comments/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentBody),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            console.log(commentBody)
          })
          // .then((data) => onHandleUpdateComment(data));
    
        setIsHidden((isHidden) => !isHidden);
        
      }
    return(
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
          </div><br/>
          <div>
            <input  type="submit" value="Save" />
          </div>
        </form>
        </div>
    )
}
export default Edit;