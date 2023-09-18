import { ADD_NOTE, NOTE_TASK_COMPLETED, REMOVE_NOTE } from "./notesTypes";

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
    case NOTE_TASK_COMPLETED:
      const editedNotes = state.notes.map((note) => {
        if (note.id !== action.payload) {
          return note;
        } else {
          note.status = "complete";
          return note;
        }
      });
      return { ...state, notes: editedNotes };
    default:
      return state;
  }
}

export default notesReducer;
