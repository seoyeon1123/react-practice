import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'; // Routes는 사용하지 않음
import MainBlog from './MainBlog.jsx';
import NewPostForm from './NewPostForm.jsx';
import BlogList from './BlogList.jsx';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={MainBlog} />
      <Route path="/new-post" component={NewPostForm} />
      <Route path="/blog-list" component={BlogList} />
    </Router>
  );
};

export default App;
