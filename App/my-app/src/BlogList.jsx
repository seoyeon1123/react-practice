import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts }) => {
  return (
    <>
      <div>
        <h2>잡Food들</h2>
        {posts.length === 0 ? (
          <p>No Post Here</p>
        ) : (
          posts.map((post, index) => (
            <BlogPost key={index} title={post.title} content={post.content} />
          ))
        )}
      </div>
    </>
  );
};

export default BlogList;
