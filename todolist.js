import React from 'react';

function TodoList({ todos, updateTodo, deleteTodo, toggleStatus }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div>
            <strong>{todo.task}</strong>
            <p>{todo.description}</p>
            <p>Status: {todo.status}</p>
            <button onClick={() => toggleStatus(todo.id)}>Toggle Status</button>
            <button onClick={() => updateTodo(todo.id, { ...todo, task: prompt('Enter new task:', todo.task) })}>
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
