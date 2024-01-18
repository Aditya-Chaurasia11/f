// UserForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'


const UserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    adminId: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/user/register', formData);
        console.log('User registration successful:', response.data);
      } catch (error) {
        console.error('User registration failed:', error.response.data);
      }
    // console.log('User Registration Data:', formData);
  };

  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    // Fetch admins when the component mounts
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admins');
        setAdmins(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    };

    fetchAdmins();
  }, []);

  return (
    <div>
      <h2>User Section</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Select Admin:
          <select name="adminId" value={formData.adminId} onChange={handleInputChange}>
            <option value="">Select an Admin</option>
            {admins.map((admin) => (
              <option key={admin._id} value={admin._id}>
                {admin.username}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserForm;
