import { ADD_NOTE, REMOVE_NOTE } from "./notesTypes";

const initialState = {
  notes: [{ id: "1", title: "Sample note", status: "open" }],
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
