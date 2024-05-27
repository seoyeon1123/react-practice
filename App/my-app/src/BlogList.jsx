import React from 'react';

const BlogList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div>
      <h2>블로그 게시글 목록</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>제목 : {post.title}</h3>
            <p>글 : {post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
