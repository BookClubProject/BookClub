import React from "react";
import { Link } from "react-router-dom";
import "../../CompoCSS/Inquiry.css"


const Posts = ({ posts, loading }) => {
  return (
    <>
      {/* {loading && <div> loading... </div>} */}
      {posts.map((post) => (
        <Link className="post_tr" to={`/login`}>
          <td>{post.number}</td>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.date}</td>
          <td>{post.state}</td>
        </Link>
      ))}
    </>
  );
};
export default Posts;
