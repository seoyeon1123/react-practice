import React, { useState } from 'react';

const NewPostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼의 기본 제출 동작 방지
    addPost(title, content); // 제출된 제목과 내용으로 addPost 함수 호출
    setTitle(''); // 제출 후 입력값 초기화
    setContent('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>새로운 Food를 소개해줘!</h2>
        <div>
          <label>요리 이름 : </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // 입력값 변경 시 title 상태 업데이트
            required
          />
        </div>
        <div>
          <label>a </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)} // 입력값 변경 시 content 상태 업데이트
            required
          ></textarea>
        </div>
        <button type="submit">Add Post</button> {/* 폼 제출 버튼 */}
      </form>
    </>
  );
};

export default NewPostForm;
