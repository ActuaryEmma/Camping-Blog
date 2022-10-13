import React from 'react';
import AddComment from './AddComment';
// import image1 from './images/image1.jpeg';


function BlogCard({id, title, description, comments,commentData, setCommentData, userids, blogid}){
    return(
    <div>
        <img   alt="blogImage"/>
         {/* <img
          src="http://placehold.it/500x300"
          id="image1"
          className="img-fluid "
          style={{ margin: `${50}px` }}
          alt="homepage"
        /> */}
        <div>
        <h5>Title: </h5>
        <p>{title}</p>
        <h5>Description: </h5>
        <p>{description}</p>
        <p>{comments}</p>

        </div>
        <AddComment commentData={commentData} setCommentData={setCommentData} userids={userids} blogid={blogid}/>
        
    </div>)
}
export default BlogCard;