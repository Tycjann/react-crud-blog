import {nanoid} from 'nanoid';

// selectors
export const getAllPosts = ({ posts }) => posts;

export const getSinglePostById = ({ posts }, postId) => posts
  .find(post => (post.id === postId));

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');
const REMOVE_POST = createActionName('REMOVE_POST');

// action creators
export const addPost = payload => ({ type: ADD_POST, payload });
export const removePost = payload => ({ type: REMOVE_POST, payload });

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, { ...action.payload, id: nanoid() }];
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload)
    default:
      return statePart;
  }
}

export default postsReducer;