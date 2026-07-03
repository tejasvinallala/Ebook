import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  const { note, updateNote } = props;

  return (
    <div className="card shadow-sm border-0 rounded-4 h-100">
      <div className="card-body">

        <h4 className="card-title text-primary fw-bold">
          {note.title}
        </h4>

        <p className="card-text">
          {note.description}
        </p>

        <span className="badge bg-info text-dark mb-3">
          {note.tag}
        </span>

        <div className="d-flex justify-content-between mt-3">

          <button
            className="btn btn-warning"
            onClick={() => updateNote(note)}
          >
            ✏️ Update
          </button>

          <button
            className="btn btn-danger"
            onClick={() => deleteNote(note._id)}
          >
            🗑 Delete
          </button>

        </div>

      </div>
    </div>
  );
};

export default NoteItem;