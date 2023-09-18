import { ADD_NOTE, REMOVE_NOTE } from "./notesTypes";

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

export const removeNote = (noteId) => {
  return {
    type: REMOVE_NOTE,
    payload: noteId,
  };
};
