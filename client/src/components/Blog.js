import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";

function Blog({user, setUser}) {
  const [blog, setBlog] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [userData, setUserData] = useState([]);
  const[show, setShow]= useState(false);


  useEffect(() => {
    fetch("/comments")
      .then((response) => response.json())
      .then((data) => setCommentData(data));
  }, []);

  useEffect(() => {
    fetch("/blogs")
      .then((response) => response.json())
      .then((data) => setBlog(data))

  }, [setCommentData]);

  return (
    <div>
      {blog.map((item) => {
        console.log(item);
        return (
          <BlogCard
          user={user} 
          setUser={setUser}
            commentData={commentData}
            setCommentData={setCommentData}
            key={item.key}
            blogid={item.id}
            title={item.title}
            description={item.description}

            comments={item.comments.map((itemcomment) => {
              return (
                <div>
                  <p style={{"font-style": "italic"}}>By: {itemcomment.user.username}</p>
                  <p>{itemcomment.user_comment}</p>
                  <div className="editdelete">
                    <div >
                      <EditComment
                        key={itemcomment.id}
                        id={itemcomment.id}
                        user={itemcomment.user.name}
                        user_comment={itemcomment.user_comment}
                        commentData={commentData}
                        setCommentData={setCommentData}
                      />
                    </div>
                    <div>
                      <DeleteComment
                        key={itemcomment.id}
                        id={itemcomment.id}
                        comment={item.user_comment}
                        commentData={commentData}
                        setCommentData={setCommentData}
                        blog_id={item.id}
                        blog={blog}
                        setBlog={setBlog}
                      />
                    </div>
                  </div><hr/>
                </div>
              );
            })} 
  
          />
        );
      }
      )}
    </div>
  );
}

export default Blog;
