import React from "react";
import { Link } from "react-router-dom";
import "../../CompoCSS/Record.css";


const RecordDeatilPosts = ({ posts, loading }) => {
  return (
    <>
      {/* {loading && <div> loading... </div>} */}
      {posts.map((post) => (
        <Link className="record_post_tr" to={`/login`}>
          <td>{post.number}</td>
          <td>{post.book}</td>
          <td>{post.title}</td>
          <td>{post.signupdate}</td>
          <td>{post.date}</td>
          <td>{post.participant}</td>
        </Link>
      ))}
    </>
  );
};
export default RecordDeatilPosts;
