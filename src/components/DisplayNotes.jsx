import React from "react";

function DisplayNotes() {
  const notes = [
    { id: 1, title: "Bring some text", status: "open" },
    { id: 2, title: "Bring some text", status: "done" },
  ];
  return (
    <>
      {notes.map((note) => {
        return (
          <div className="card" key={note.id}>
            <input
              type="checkbox"
              name="status"
              id="status"
              disabled={note.status === "done"}
            />
            <p
              style={{
                textDecoration:
                  note.status === "done" ? "line-through" : "none",
              }}
            >
              {note.title}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default DisplayNotes;
