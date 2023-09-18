import { ADD_NOTE, REMOVE_NOTE } from "./notesTypes";

const initialState = {
  notes: [
    {
      id: "cdb3c262-84e4-46dd-b2ee-168d52fe7e9c",
      title: "A sample note",
      status: "open",
    },
  ],
};

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case REMOVE_NOTE:
      const updatedNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      return { ...state, notes: updatedNotes };
    default:
      return state;
  }
}

export default notesReducer;
