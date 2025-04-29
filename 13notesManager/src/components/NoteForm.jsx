import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/notes/noteSlice";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  console.log("dispatch: ", dispatch);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ title, description }));
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="space-x-3 mt-12">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter note title..."
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter note description..."
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
