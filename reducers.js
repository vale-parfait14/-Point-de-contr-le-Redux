// reducers.js
import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, SET_FILTER } from 'C:/Users/ozova/Desktop/GOMYCODE/REACT/Todo/src/actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo
      );
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, description: action.payload.description }
          : todo
      );
    default:
      return state;
  }
};

const filter = (state = 'ALL', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos,
  filter
});

export default rootReducer;
