import React, { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MainBlog from './MainBlog.jsx';
import NewPostForm from './NewPostForm.jsx';
import BlogList from './BlogList.jsx';
import './App.css';

const App = () => {
  // 새로운 게시글 목록을 상태로 관리
  const [posts, setPosts] = useState([]);

  // 새로운 게시글을 추가하는 함수
  const handleAddPost = (newPost) => {
    // 기존 게시글 목록에 새로운 게시글을 추가
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainBlog />} />
        {/* 새로운 게시글을 추가하는 라우트 */}
        <Route
          path="/new-post"
          element={<NewPostForm onAddPost={handleAddPost} />} // onAddPost 함수를 NewPostForm 컴포넌트로 전달
        />
        {/* 게시글 목록을 표시하는 라우트 */}
        <Route
          path="/blog-list"
          element={<BlogList posts={posts} />} // 현재의 게시글 목록을 BlogList 컴포넌트로 전달
        />
        {/* 404 페이지를 위한 리다이렉트 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
