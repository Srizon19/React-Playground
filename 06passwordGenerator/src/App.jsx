import { useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharALlowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef();

  useEffect(() => {
    passGenerator();
  }, [length, numberAllowed, charAllowed]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    console.log(pass);
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <h1 className="text-2xl font-bold">Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-700 bg-red-200">
        <div className="flex shadow  overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="password"
            readOnly
            ref={passwordRef}
          ></input>
          <button
            onClick={copyToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="my-4">
          <label htmlFor="lengthInput" className="mr-2">
            Length:
          </label>
          <input
            type="range"
            id="lengthInput"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <span className="ml-2">{length}</span>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={(e) => {
              setNumberAllowed((prev) => !prev); // Fixed logic
            }}
          ></input>
          <label htmlFor="numberInput">Include Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharALlowed((prev) => !prev); // Fixed logic
            }}
          ></input>
          <label htmlFor="numberInput">Include Numbers</label>
        </div>
      </div>

      <button
        onClick={passGenerator}
        className="bg-green-600 text-white px-4 py-1 rounded"
      >
        Generate Pass
      </button>
    </>
  );
}

export default App;
