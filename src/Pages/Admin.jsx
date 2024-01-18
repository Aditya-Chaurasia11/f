// AdminForm.js
import React, { useState } from "react";
import axios from "axios";

const AdminForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your admin registration logic here, using formData
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/register",
        formData
      );
      console.log("Admin registration successful:", response.data);
    } catch (error) {
      console.error("Admin registration failed:", error.response.data);
    }
  };

  return (
    <div>
      <h2>Admin Section</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AdminForm;
