import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    {
      id: 1,
      title: "Learn Redux",
      description: "Understand actions, reducers, store",
    },
  ],
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const note = {
        id: nanoid(),
        title: action.payload.title, // fixed
        description: action.payload.description,
      };
      console.log("from addNote: ", action.payload);
      console.log("produced by payload: ", note);
      state.notes.push(note);
    },

    updateNote: (state, action) => {
      const note2update = state.notes.find(
        (note) => note.id === action.payload.id
      );
      if (note2update) {
        note2update.title = action.payload.title; // fixed
        note2update.description = action.payload.description;
      }
    },

    removeNote: (state, action) => {
      state.notes = state.notes.filter(
        // fixed
        (note) => note.id !== action.payload
      );
    },
  },
});

export const { addNote, updateNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;
