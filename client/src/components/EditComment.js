import React, { useState } from "react";
import Edit from "./Edit";

function EditComment({
  id,
  user_comment,
  commentData,
  setCommentData,
  
}) {
  const [commentBody, setCommentBody] = useState(user_comment);
  const [isHidden, setIsHidden] = useState(true);

  function handlehide() {
    setIsHidden((isHidden) => !isHidden);
  }

  function handleUpdateComment(updatedComments) {
    const updateComments = commentData.map((item) =>
      item.id === updatedComments.id ? updatedComments : item
      
    );
    // console.log(updateComments)
    setCommentData(updateComments);
  }

  return (
    <div>
      {isHidden ? null : (
        <Edit
          commentBody={commentBody}
          setCommentBody={setCommentBody}
          setIsHidden={setIsHidden}
          onHandleUpdateComment={handleUpdateComment}
          id={id}
        />
      )}
      <button className="btn1" onClick={handlehide}>Edit</button>
    </div>
  );
}
export default EditComment;