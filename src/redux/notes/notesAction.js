import { ADD_NOTE, NOTE_TASK_COMPLETED, REMOVE_NOTE } from "./notesTypes";

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

export const noteTaskCompleted = (noteId) => {
  return {
    type: NOTE_TASK_COMPLETED,
    payload: noteId,
  };
};
