import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addNote } from "../redux/notes/notesAction";

function CreateNotes() {
  const [notes, setNotes] = useState(null);
  const dispatch = useDispatch();

  const createTaskHandler = () => {
    const note = {
      id: uuidv4(),
      title: notes,
      status: "open",
    };
    dispatch(addNote(note));
  };
  return (
    <>
      <form>
        <label htmlFor="notes">Enter a Todo Note</label>
        <textarea
          rows={10}
          cols={60}
          type="text"
          placeholder="Enter your task description"
          name="notes"
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="button" onClick={createTaskHandler}>
          Add task
        </button>
      </form>
    </>
  );
}

export default CreateNotes;
