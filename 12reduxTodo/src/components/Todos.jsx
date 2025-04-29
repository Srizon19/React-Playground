import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </div>
  );
}

export default Todos;
