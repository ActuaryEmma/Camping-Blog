import React, { useState } from "react";
import Edit from "./Edit";

function EditComment({
  id,
  comment,
  commentData,
  setCommentData,
  
}) {
  const [commentBody, setCommentBody] = useState(comment);
  const [isHidden, setIsHidden] = useState(true);

  function handlehide() {
    setIsHidden((isHidden) => !isHidden);
  }

  function handleUpdateComment(updatedComments) {
    const updateComments = commentData.map((item) =>
      item.id === updatedComments.id ? updatedComments : item
    );
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