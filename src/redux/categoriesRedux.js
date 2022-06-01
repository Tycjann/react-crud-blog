import { nanoid } from 'nanoid';

// selectors
export const getAllCategories = ({ categories }) => categories;

export const getSingleCategoryById = ({ categories }, categoryId) => categories
  .find(category => (category.id === categoryId));

// actions
const createActionName = actionName => `app/category/${actionName}`;
const ADD_CATEGORY = createActionName('ADD_CATEGORY');
const EDIT_CATEGORY = createActionName('EDIT_CATEGORY');
const REMOVE_CATEGORY = createActionName('REMOVE_CATEGORY');

// action creators
export const addCategory = payload => ({ type: ADD_CATEGORY, payload });
export const editCategory = payload => ({ type: EDIT_CATEGORY, payload });
export const removeCategory = payload => ({ type: REMOVE_CATEGORY, payload });


const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    // case ADD_CATEGORY:
    //   return [...statePart, { ...action.payload, id: nanoid() }];
    // case EDIT_CATEGORY:
    //   return statePart.map(category => (category.id === action.payload.id ? { ...category, ...action.payload } : category));
    // case REMOVE_CATEGORY:
    //   return statePart.filter(category => category.id !== action.payload)
    default:
      return statePart;
  }
}

export default categoriesReducer;