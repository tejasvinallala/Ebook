import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes = [], getnote, updateNote } = context;

  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
    tag: "",
  });

  const ref = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getnote();
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    updateNote(note.id, note.title, note.description, note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const editNote = (currentNote) => {
    ref.current.click();

    setNote({
      id: currentNote._id,
      title: currentNote.title,
      description: currentNote.description,
      tag: currentNote.tag,
    });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#editModal"
      >
        Edit
      </button>

      <div className="modal fade" id="editModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Edit Note</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <form>

                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={note.title}
                    onChange={onChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={note.description}
                    onChange={onChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    name="tag"
                    value={note.tag}
                    onChange={onChange}
                  />
                </div>

              </form>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-primary"
                onClick={handleClick}
                data-bs-dismiss="modal"
              >
                Update Note
              </button>

              <button
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>

      <h3 className="my-3">Your Notes</h3>

      {notes.length === 0 && (
        <p>No notes to display.</p>
      )}

      <div className="row">
        {notes.map((note) => (
          <div className="col-md-4 mb-3" key={note._id}>
            <NoteItem note={note} updateNote={editNote} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Notes;