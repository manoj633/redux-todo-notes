import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteTaskCompleted, removeNote } from "../redux/notes/notesAction";

function DisplayNotes() {
  const notes = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  const removeNoteHandler = (id) => {
    dispatch(removeNote(id));
  };

  const markAsComplete = (id) => {
    dispatch(noteTaskCompleted(id));
  };

  return (
    <>
      {notes.map((note) => {
        return (
          <div className="card" key={note.id}>
            <input
              type="checkbox"
              name="status"
              id="status"
              disabled={note.status === "complete"}
              onChange={() => {
                markAsComplete(note.id);
              }}
            />
            <p
              style={{
                textDecoration:
                  note.status === "complete" ? "line-through" : "none",
              }}
            >
              {note.title}
            </p>
            <button
              type="button"
              onClick={() => {
                removeNoteHandler(note.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default DisplayNotes;
