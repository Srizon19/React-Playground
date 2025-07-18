import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("handle add....");
    if (!todo) return;
    addTodo({ id: Date.now(), todo, completed: false });
    setTodo("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleAdd(e);
        }}
        className="flex"
      >
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
