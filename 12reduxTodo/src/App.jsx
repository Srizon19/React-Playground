import { TodoProvider } from "../../11TodoContext/src/contexts";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-2xl bg-gray-300 text-center font-bold py-5">
        Understanding Redux Toolkit
      </h1>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <AddTodo></AddTodo>
        </div>
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <Todos></Todos>
        </div>
      </div>
    </>
  );
}

export default App;
