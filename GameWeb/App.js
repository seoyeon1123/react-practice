import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Game1 from './서연이의가위바위보';
import Game2 from './responseChecked hooks';

const App = () => {
  return (
    <Router>
      <div>
        <h1>게임 선택</h1>
        <ul>
          <li>
            <Link to="/game1">게임 1</Link>
          </li>
          <li>
            <Link to="/game2">게임 2</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/game1" element={<Game1 />} />
          <Route path="/game2" element={<Game2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
