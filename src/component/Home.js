import React from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";

const Home = () => {
  return (
    <div className="container mt-4">

      {/* Welcome Section */}
      <div className="p-5 mb-4 bg-primary text-white rounded-4 shadow">
        <div className="container py-3">
          <h1 className="display-5 fw-bold">📒 Welcome to Notes</h1>
          <p className="fs-5">
            Store your notes securely and access them anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Add Note */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h3 className="mb-3">➕ Add New Note</h3>
          <AddNote />
        </div>
      </div>

      {/* Notes List */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h3 className="mb-3">📝 Your Notes</h3>
          <Notes />
        </div>
      </div>

    </div>
  );
};

export default Home;