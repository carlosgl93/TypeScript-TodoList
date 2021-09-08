import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoLabel, setTodoLabel] = useState('');

  const addTodo = () => {
    setTodos((todo) => [
      ...todos,
      {
        id: todos.length() + 1,
        label: todo.label,
        isComplete: false,
      },
    ]);
  };

  const handleNewTodoLabelChange = (e) => {
    setTodoLabel(e.target.value);
  };

  const handleNewTodo = () => {
    if (todoLabel !== '') {
      addTodo({ todoLabel });
    }
  };

  const handleComplete = (todoId, isComplete) => {
    setTodos((todos) => {
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isComplete: true };
        }
        return todo;
      });
    });
  };

  const unCompletedTodos = (todos) => {
    todos.filter((todo) => todo.isComplete !== false);
  };
  return (
    <div>
      <input
        value={todoLabel}
        onChange={handleNewTodoLabelChange}
        onKeyPress={handleNewTodo}
      />

      <p>{`${unCompletedTodos.length} remaining out of ${todos.length}`}</p>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              onClick={handleComplete}
              className={todo.isComplete ? 'is-done' : null}
            >
              {todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
