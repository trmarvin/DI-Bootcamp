import React from "react";
import posts from "./posts.json";

function PostList() {
  return (
    <div className="container mt-4">
      <h2>Posts</h2>

      {posts.map((post) => (
        <div key={post.id} className="mb-3 p-3 border rounded">
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;