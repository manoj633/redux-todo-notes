import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  noteTaskCompleted,
  removeNote,
  editNote,
} from "../redux/notes/notesAction";

function DisplayNotes() {
  const notes = useSelector((state) => state.notes);
  const [editedNotes, setEditedNotes] = useState({}); // Store edited content for each note
  const [edit, setEdit] = useState({ isEdit: false, editNoteId: null });
  const dispatch = useDispatch();

  const removeNoteHandler = (id) => {
    dispatch(removeNote(id));
  };

  const markAsComplete = (id) => {
    dispatch(noteTaskCompleted(id));
  };

  const saveEditedNote = (id) => {
    const editedContent = editedNotes[id]; // Get edited content for the specific note
    if (editedContent !== undefined) {
      const edits = { id, title: editedContent };
      dispatch(editNote(edits));
      setEdit({ isEdit: false, editNoteId: null });
    }
  };

  return (
    <>
      {notes.map((note) => {
        return (
          <div className="card" key={note.id}>
            {edit.isEdit && edit.editNoteId === note.id ? (
              <>
                <textarea
                  rows={10}
                  cols={10}
                  placeholder={note.title}
                  value={editedNotes[note.id] || ""} // Use edited content from state
                  onChange={(e) => {
                    setEditedNotes({
                      ...editedNotes,
                      [note.id]: e.target.value,
                    });
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    saveEditedNote(note.id); // Pass note id to saveEditedNote
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
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
                    setEdit({ isEdit: true, editNoteId: note.id });
                  }}
                >
                  Edit
                </button>
              </>
            )}
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
