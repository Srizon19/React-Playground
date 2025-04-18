import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/modal";

function App() {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState([]);
  const [hidBtn, setHidBtn] = useState("yes");

  useEffect(() => {
    if (fields.length !== 0) {
      setHidBtn("");
    } else {
      setHidBtn("yes");
    }
  }, [fields]);
  const onAdd = (obj) => {
    setFields([...fields, { ...obj, id: Date.now() }]);
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(e.target?.name?.value);
  };

  return (
    <>
      <h1 className="text-xl font-bold bg-green-500 p-3">
        Dynamic Form Builder
      </h1>

      <button
        onClick={() => setOpen(true)}
        className="p-3 btn btn-primary text-white rounded my-3"
      >
        Add Field
      </button>

      {/* Modal Component */}
      <Modal open={open} setOpen={setOpen} onAdd={onAdd} />

      {/* Form Area Rendered by React */}
      <form
        onSubmit={handleSubmit}
        id="formArea"
        className="border-2 border-gray-300 rounded p-4"
      >
        <h2 className="text-lg font-semibold mb-3">Form Area</h2>
        {fields.length === 0 && (
          <p>No fields yet. Click "Add Field" to begin.</p>
        )}
        {fields.map((field) => (
          <div key={field.id} className="mb-2">
            <label className="block mb-1">{field.label}</label>
            {field.type === "checkbox" ? (
              <input type="checkbox" />
            ) : (
              <input
                name={field.label}
                type={field.type}
                className="border px-2 py-1 rounded w-full"
              />
            )}
          </div>
        ))}
        <button hidden={hidBtn}>Submit</button>
      </form>
    </>
  );
}

export default App;
