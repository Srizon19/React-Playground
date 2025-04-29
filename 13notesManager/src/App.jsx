import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center text-white bg-blue-500 py-4">
        Understanding Redux
      </h1>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          {/* note form will be place here */}
          <NoteForm></NoteForm>
        </div>
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          {/* list of notes with delete button */}
          <NoteList></NoteList>
        </div>
      </div>
    </>
  );
}

export default App;
