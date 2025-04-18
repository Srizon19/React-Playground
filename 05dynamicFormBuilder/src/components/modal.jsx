import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function Modal({ open, setOpen, onAdd }) {
  const [label, setLabel] = useState("");
  const [type, setType] = useState("text");

  const handleAdd = () => {
    if (label === "") {
      alert("label is empty");
      return;
    }
    onAdd({ id: Date.now(), label, type });
    setLabel("");
    setType("text");
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-yellow-200 text-black p-6 rounded-lg shadow-md w-full max-w-md">
          <DialogTitle className="text-lg font-bold mb-4">
            Add Field
          </DialogTitle>

          <label className="block mb-2">
            Label:
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="w-full border px-2 py-1 rounded mt-1"
            />
          </label>

          <label className="block mb-4">
            Type:
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border px-2 py-1 rounded mt-1"
            >
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="checkbox">Checkbox</option>
              <option value="number">Number</option>
            </select>
          </label>

          <div className="flex justify-end gap-2">
            <button
              onClick={() => setOpen(false)}
              className="bg-gray-200 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add Field
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
