import React from "react";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4 p-4">
        <h2 className="text-center text-primary mb-4">
          Welcome to Dashboard 👋
        </h2>

        <div className="row">

          <div className="col-md-4 mb-3">
            <div className="card bg-primary text-white shadow">
              <div className="card-body text-center">
                <h5>Total Notes</h5>
                <h2>25</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card bg-success text-white shadow">
              <div className="card-body text-center">
                <h5>Completed</h5>
                <h2>18</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card bg-warning text-dark shadow">
              <div className="card-body text-center">
                <h5>Pending</h5>
                <h2>7</h2>
              </div>
            </div>
          </div>

        </div>

        <div className="card mt-4 shadow-sm">
          <div className="card-body">
            <h4>User Information</h4>
            <hr />
            <p><strong>Name:</strong> User</p>
            <p><strong>Status:</strong> Active ✅</p>
            <p><strong>Role:</strong> User</p>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary me-3">
            Add New Note
          </button>

          <button className="btn btn-outline-danger">
            Delete Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;