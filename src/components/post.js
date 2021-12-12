import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  ///////////////////////////
  // Style Objects
  ///////////////////////////
  const div = {

    // backgroundColor: "#d5ffff",
    textAlign: "center",
    border: "2px solid",
    borderRadius: "3em",
    margin: "10px auto",
    width: "17%",
  };

  return (
    <div class ="shoesIndex" style={div}>
      
      <Link to={`/post/${post.id}`}>
      <h1>{post.brand}</h1>
      <img src={post.image}/>
      </Link>

      <h2>{post.name}</h2>
      <h4>{post.cost}</h4>
      <h6>{post.year}</h6>
      
      
      
    </div>
  );
};

export default Post;