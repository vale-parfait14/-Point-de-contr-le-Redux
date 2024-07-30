import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'C:/Users/ozova/Desktop/GOMYCODE/REACT/Todo/src/actions';

const AddTodo = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddClick = () => {
    if (description.trim()) {
      dispatch(addTodo(description));
      setDescription('');
    }
  };

  return (
    <div>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button onClick={handleAddClick}>Add Task</button>
    </div>
  );
};

export default AddTodo;
