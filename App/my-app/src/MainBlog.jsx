import React, { useReducer } from 'react';
import NewPostForm from './NewPostForm';
import BlogList from './BlogList';

const initialState = {
  posts: [],
  goodNum: 0,
};

const ADD_POST = 'ADD_POST';
const CLICK_GOOD_BTN = 'CLICK_GOOD_BTN';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case CLICK_GOOD_BTN:
      return {
        ...state,
        goodNum: state.goodNum + 1,
      };
    default:
      return state;
  }
};

const MainBlog = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addPost = (title, content) => {
    const newPost = { title, content };
    dispatch({ type: ADD_POST, payload: newPost });
  };

  const onClickBtn = () => {
    dispatch({ type: CLICK_GOOD_BTN });
  };

  return (
    <>
      <header>
        <h1>자취생의 요리 BLOG</h1>
      </header>
      <section>
        <NewPostForm addPost={addPost} />
        <BlogList posts={state.posts} />
      </section>
      <footer>
        <button onClick={onClickBtn}>좋아요 {state.goodNum}</button>
      </footer>
    </>
  );
};

export default MainBlog;
