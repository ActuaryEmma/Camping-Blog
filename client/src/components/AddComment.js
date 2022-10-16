import React, {useState, useRef} from "react";

function AddComment({commentData, setCommentData, blogid}){

    const formreset = useRef()

    // console.log(blogid)
    const[newObj, setNewObj] = useState({
        user_comment: "",
        blog_id: blogid
    })

    function handleChange(event) {
        //  console.log(event.target.value)
        setNewObj({ [event.target.name]: event.target.value , blog_id: blogid});
      }

    function handleSubmit(e){
        e.preventDefault();
        fetch("/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newObj)
    })
    
    .then((response) => {
        if (response.ok) 
            {
                response.json()
                .then ((data) => setCommentData([...commentData, data]))
            }else {
                response.json()
                .then((errors) => console.log(errors))
            }

        } )

    // .then ((data) => {
    //     console.log(newObj)
    //     console.log(data)
    //     console.log(blogid)
    // })
    //   .then((newdata) => setCommentData([...commentData, newdata]))
    setNewObj({
        user_comment: "",
        blog_id: blogid,
        
    })
    formreset.current.reset()
    }


    return(
        <div>
            <form onSubmit={handleSubmit} ref={formreset}>
            <input onChange={handleChange} className="inputtype" type="text" name="user_comment" value={newObj.name} placeholder="add a comment"/>
                <input className="btn3" type="submit" value="Send"/>
            </form>
        </div>
    )
}
export default AddComment;