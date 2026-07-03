import React, { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addnote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addnote(note.title, note.description, note.tag);

    alert("Note Added Successfully!");

    setNote({
      title: "",
      description: "",
      tag: "",
    });
  };

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body">
          <h3 className="text-center text-primary mb-4">
            ➕ Add New Note
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="Enter Note Title"
                value={note.title}
                onChange={onChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="4"
                name="description"
                placeholder="Enter Note Description"
                value={note.description}
                onChange={onChange}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Tag</label>
              <input
                type="text"
                className="form-control"
                name="tag"
                placeholder="Enter Tag"
                value={note.tag}
                onChange={onChange}
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Save Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNote;