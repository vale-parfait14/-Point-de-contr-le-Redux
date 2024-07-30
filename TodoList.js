import React from 'react';
import { useSelector } from 'react-redux';
import Todo from 'C:/Users/ozova/Desktop/GOMYCODE/REACT/Todo/src/Todo';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'COMPLETED') return todo.isDone;
    if (filter === 'INCOMPLETE') return !todo.isDone;
    return true; // 'ALL' filter
  });

  return (
    <div>
      {filteredTodos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
