import React from 'react';
import AddComment from './AddComment';
import image1 from '../images/image1.jpeg';


function BlogCard({id, title, description, comments,commentData, setCommentData, userids, blogid}){
    return(
    <div className= "blogcard">
        <div className="image">
        <img  src={image1} alt="blogImage"/>
        </div>
       
        <div>
        <h5 className="title">{title}</h5>
        <p>{description}</p>
        <p>{comments}</p>
        <AddComment commentData={commentData} setCommentData={setCommentData} userids={userids} blogid={blogid}/> <br/><br/>
        </div>
    </div>)
}
export default BlogCard;