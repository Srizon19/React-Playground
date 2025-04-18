import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1>React Understanding</h1>
      <h3>Counter Value: {counter}</h3>
      <span>
        <button
          onClick={() => {
            if (counter) setCounter(counter + 1);
          }}
        >
          Add
        </button>
        <hr />
        <button
          onClick={() => {
            if (counter <= 0) {
              setCounter(0);
              return;
            }
            setCounter(counter - 1);
          }}
        >
          Deduct
        </button>
      </span>
    </>
  );
}

export default App;
