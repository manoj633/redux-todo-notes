import React, { useState } from "react";

function CreateNotes() {
  const [notes, setNotes] = useState(null);

  const createTaskHandler = () => {
    console.log(notes);
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
