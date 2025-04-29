import { useSelector, useDispatch } from "react-redux";

import { removeNote } from "../features/notes/noteSlice";

function NoteList() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  console.log("Notes from store: ", notes);

  const handleDelete = (id) => {
    dispatch(removeNote(id));
  };

  return (
    <div>
      {notes.map((note) => (
        <div className="flex ">
          <h2 className="text-xl font-bold ">
            {note.title}: {note.description}
          </h2>
          <button
            onClick={() => handleDelete(note.id)}
            className="ml-4 border-2 py-1 px-3 bg-red-400"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
