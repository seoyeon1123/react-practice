import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import Game1 from './RSP/서연이의가위바위보';
import Game2 from './응답체크/responseChecked hooks';

const Main = () => (
  <div>
    <h1 className="title">미니 게임</h1>
    <ul className="games">
      <li className="game1">
        <Link to="/game1">게임 1</Link>
      </li>
      <li className="game2">
        <Link to="/game2">게임 2</Link>
      </li>
    </ul>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game1" element={<Game1WithMainButton />} />
        <Route path="/game2" element={<Game2WithMainButton />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

const Game1WithMainButton = () => (
  <div className="mainPage">
    <Game1 />
    <Link to="/">메인 페이지로 이동</Link>
  </div>
);

const Game2WithMainButton = () => (
  <div className="mainPage">
    <Game2 />
    <Link to="/">메인 페이지로 이동</Link>
  </div>
);

export default App;
