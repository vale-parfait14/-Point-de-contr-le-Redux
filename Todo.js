import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo } from 'C:/Users/ozova/Desktop/GOMYCODE/REACT/Todo/src/actions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEditClick = () => {
    const newDescription = prompt('Edit task description', todo.description);
    if (newDescription) {
      dispatch(editTodo(todo.id, newDescription));
    }
  };

  return (
    <div id='btn'>
      <span id='todo-description'
        style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}
        onClick={handleToggleClick}
      >
        {todo.description}
      </span>
      <button id='edit-btn' onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default Todo;
