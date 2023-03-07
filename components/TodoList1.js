import React, { useState } from "react";

const TodoList1 = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Deploy to production", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <del>{todo.text}</del> : todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
            <input
              type="text"
              value={todo.text}
              onChange={(event) => updateTodo(todo.id, event.target.value)}
            />
          </li>
        ))}
      </ul>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoList1;
