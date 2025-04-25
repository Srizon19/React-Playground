import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  console.log(JSON.stringify(todos));

  const addTodo = (todo) => {
    console.log("from add todo: ", todo);
    setTodos((prev) => [...prev, todo]);
  };

  const updateTodo = (todo, id) => {
    console.log("from update todo: ", todo);
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  //when dependency array is empty it renders when the page is loaded and then it does not render anymore
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      console.log("from get item: ", todos);
      setTodos(todos);
    }
  }, []);

  //set todos in the local storage

  useEffect(() => {
    const set2Todo = JSON.stringify(todos);
    console.log("setting todo: ", set2Todo);
    localStorage.setItem("todos", set2Todo);
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <h1 className="text-2xl text-center font-bold bg-red-400 py-3 ">
        Understanding Context
      </h1>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3 ">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => {
              return <TodoItem key={todo.id} todo={todo}></TodoItem>;
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
