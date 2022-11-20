import React from "react";

const Posts = ({ posts, loading }) => {
  return (
    <>
      {/* {loading && <div> loading... </div>} */}
        {posts.map((post) => (
          <tr>
            <td>{post.number}</td>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.date}</td>
            <td>{post.state}</td>
          </tr>
        ))}

    </>
  );
};
export default Posts;
