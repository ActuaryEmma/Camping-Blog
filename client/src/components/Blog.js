import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";

function Blog() {
  const [blog, setBlog] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUserData(data));
    // .then((data) => {
    //     console.log(data)
    // })
  }, []);
  const userids = userData.map((item) => item.id);
  console.log(userids);

  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((response) => response.json())
      .then((data) => setCommentData(data));
    // .then((data) => {
    //     console.log(data)
    // })
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((data) => setBlog(data));
    // .then((data) => {
    //     console.log(data)
    // })
  }, []);

  return (
    <div>
      {blog.map((item) => {
        console.log(item);
        return (
          <BlogCard
            userids={userids}
            commentData={commentData}
            setCommentData={setCommentData}
            key={item.key}
            blogid={item.id}
            title={item.title}
            description={item.description}
            comments={item.comments.map((itemcomment) => {
              return (
                <div>
                  <p>{itemcomment.user.username}</p>
                  <p>{itemcomment.comment}</p>
                  <div className="editdelete">
                    <div >
                      <EditComment
                        key={itemcomment.id}
                        id={itemcomment.id}
                        user={itemcomment.user.name}
                        comment={itemcomment.comment}
                        commentData={commentData}
                        setCommentData={setCommentData}
                      />
                    </div>
                    <div>
                      <DeleteComment
                        key={itemcomment.id}
                        id={itemcomment.id}
                        comment={item.comment}
                        commentData={commentData}
                        setCommentData={setCommentData}
                        blog_id={item.id}
                        blog={blog}
                        setBlog={setBlog}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          />
        );
      })}
    </div>
  );
}

export default Blog;
