import React from 'react';

const BlogPost = ({ title, content }) => {
  return (
    <>
      <section>
        <div>요리 이름 : {title}</div>
        <div>만드는 방법 :{content}</div>
      </section>
    </>
  );
};
export default BlogPost;
