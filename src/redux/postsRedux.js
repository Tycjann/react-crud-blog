import {nanoid} from 'nanoid';

// selectors

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');
const REMOVE_POST = createActionName('REMOVE_POST');

// action creators
export const addCard = payload => ({ type: ADD_POST, payload });
export const removeCard = payload => ({ type: REMOVE_POST, payload });

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, { ...action.payload, id: nanoid() }];
    case REMOVE_POST:
      return statePart.filter(card => card.id !== action.payload)
    default:
      return statePart;
  }
}

export default postsReducer;