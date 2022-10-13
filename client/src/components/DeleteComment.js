import React from 'react';

function DeleteComment({id, blog, setCommentData, blog_id}){

    function handleDeleteClick(){
        
        fetch(`http://localhost:3000/comment/${id}`, {
            method: 'DELETE'
        
        })
        .then((res) => res.json())
        .then(() => {
            console.log(blog)
        
            let findblog = blog.find((blogitem) => blogitem.id === blog_id)
            console.log(findblog)
            console.log(findblog.comments)

            let updateComments = findblog.comments.filter(
                (item) => item.id !== id
              );
                console.log(updateComments)

             findblog.comments = updateComments 
             console.log(findblog.comments)
             console.log(blog)

            setCommentData(updateComments);
          
            
            
        })

     
    }
    return(
        <div>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}
export default DeleteComment;