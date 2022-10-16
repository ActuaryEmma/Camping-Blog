import React from 'react';

function DeleteComment({id, blog, setCommentData, blog_id}){

    function handleDeleteClick(){
        
        fetch(`/comments/${id}`, {
            method: 'DELETE'
        
        })
        .then((res) => res.json())
        .then(() => {
            let findblog = blog.find((blogitem) => blogitem.id === blog_id)
            console.log(findblog)
            console.log(findblog.comments)

            let updateComments = findblog.comments.filter(
                (item) => item.id !== id
              );

                console.log(updateComments)

            setCommentData(updateComments);  
        })

     
    }
    return(
        <div>
            <button  className="btn1" onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}
export default DeleteComment;