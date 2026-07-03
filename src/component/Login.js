import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const host = "http://localhost:5000";
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const json = await response.json();
     if (json.success) {
      localStorage.setItem("token", json.authtoken);
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };
  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Login</h2>
         <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input type="email"className="form-control" name="email"value={credentials.email} onChange={onChange}required/>
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password"className="form-control"name="password" value={credentials.password} onChange={onChange} required/>
          </div>
          <button className="btn btn-primary w-100"> Login </button>
        </form>
      </div>
    </div>
  );
};

export default Login;