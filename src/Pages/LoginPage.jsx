// client/src/components/LoginPage.js
import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = () => {
    setIsAdmin((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your login logic here, e.g., make a request to your backend
    // with the provided email and password
    const response = await axios.post(
      "http://localhost:5000/api/admin/login",
      formData
    );
    console.log("Login form submitted:", formData);
    console.log(response.data);
    // Add your logic to send a request to the server for authentication
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleToggle}>
        {isAdmin ? "Switch to User" : "Switch to Admin"}
      </button>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      {isAdmin && <div>Admin View Content</div>}
      {!isAdmin && <div>User View Content</div>}
    </div>
  );
};

export default LoginPage;
