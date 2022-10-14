import REact, {useState, useEffect} from "react";

function AddComment({commentData, setCommentData,userids, blogid}){
    console.log(userids)
    console.log(blogid)
    const[newObj, setNewObj] = useState({
        comment: "",
        user_id: userids,
        blog_id: blogid
    })

    function handleChange(event) {
        //  console.log(event.target.value)
        setNewObj({ ...newObj, [event.target.name]: event.target.value });
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
    .then((response) => response.json())
    .then ((data) => {
        console.log(data)
        console.log(userids)
        console.log(blogid)
    })
      .then((newdata) => setCommentData([...commentData, newdata]))
    setNewObj({
        comment: "",
        user_id: userids,
        blog_id: blogid,
    })
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} className="inputtype" type="text" name="comment" value={newObj.name} placeholder="add a comment"/>
                <button className="btn3" type="submit">Send</button>
            </form>
        </div>
    )
}
export default AddComment;