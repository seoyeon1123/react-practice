import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // react-router-dom에서 Link 가져오기
import './NewPost.css';

const NewPostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 새로운 게시글 데이터를 생성
    const newPost = { title, content };
    // 부모 컴포넌트로 새로운 게시글 데이터를 전달
    onAddPost(newPost);
    // 입력 필드 초기화
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div>
          <label htmlFor="title">제목:</label>
          <input
            type="text"
            id="title"
            value={title}
            className="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">내용:</label>
          <textarea
            id="content"
            value={content}
            className="content"
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">게시글 추가</button>
        {/* Link 컴포넌트를 사용하여 메인 화면으로 이동하는 버튼 추가 */}
        <Link to="/">
          <button>메인 화면으로</button>
        </Link>
      </div>
    </form>
  );
};

export default NewPostForm;
