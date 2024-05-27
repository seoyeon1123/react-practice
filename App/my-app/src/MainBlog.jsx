import React from 'react';
import { Link } from 'react-router-dom';
import './mainBlog.css';

const MainBlog = () => {
  return (
    <div className="container">
      {/* container 클래스 추가 */}
      <header>
        <h1>자취생의 요리 BLOG</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/new-post">
              <button>글 작성하기</button>
            </Link>
          </li>
          <li>
            <Link to="/blog-list">
              <button>블로그 글 목록 보기</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainBlog;
