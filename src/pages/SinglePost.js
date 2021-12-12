import React from "react"
import {Link, useParams} from "react-router-dom"

const SinglePost = ({posts, edit, deleteSneaker}) => {
    // get the params from the url
    const params = useParams()
    const id = parseInt(params.id)

    // find the particular post the user wants to see based on the param
    const post = posts.find((p) => p.id === id)
    console.log(post)

    ////////////////////
    // Style Object
    /////////////////////
    const div = {
        textAlign: "center",
        border: "3px solid gold",
        borderRadius:"3em",
        width: "25%",
        margin: "30px auto",
        boxShadow: "0 0 10px rgba(0, 0, 0, .5)",

    }


    
    return <div style={div}>   
      <h1>{post?.brand}</h1>
      <h2>{post?.name}</h2>
      <h4>{post?.cost}</h4>
      <h6>{post?.year}</h6>
      <button onClick={() => deleteSneaker(post)}>Delete</button>
      <button onClick={() => edit(post)}>Edit this</button>
      <img class = "imageSize" src = {post?.image}/>
        <Link to="/">
            <button>Go Back to Home</button>
        </Link>
    </div>
}

export default SinglePost;