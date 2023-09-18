import {
  ADD_NOTE,
  NOTE_TASK_COMPLETED,
  REMOVE_NOTE,
  EDIT_NOTE,
} from "./notesTypes";

const initialState = {
  notes: [{ id: "1", title: "Sample note", status: "open" }],
};

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case EDIT_NOTE:
      const editedNote = state.notes.map((note) => {
        if (note.id !== action.payload.id) {
          return note;
        } else {
          console.log(action.payload);
          note.title = action.payload.title;
          note.status = action.payload.status;
        }
      });
      return { ...state, notes: editedNote };
    case REMOVE_NOTE:
      const updatedNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      return { ...state, notes: updatedNotes };
    case NOTE_TASK_COMPLETED:
      const completedNote = state.notes.map((note) => {
        if (note.id !== action.payload) {
          return note;
        } else {
          note.status = "complete";
          return note;
        }
      });
      return { ...state, notes: completedNote };
    default:
      return state;
  }
}

export default notesReducer;
