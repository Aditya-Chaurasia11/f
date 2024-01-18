// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Task = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [assignedUser, setAssignedUser] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users from the server
    axios.get('http://localhost:5000/api/users')  // Replace with your actual endpoint for fetching users
      .then(response => {
        // setUsers(response.data.users);
        console.log(response);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleTaskSubmit = (e) => {
    e.preventDefault();

    // Make a request to the server to create a task
    axios.post('/admin/task', { name, description, assignedUser })
      .then(response => {
        console.log('Task created successfully:', response.data.task);
        // You can handle success as needed, e.g., show a success message, redirect, etc.
      })
      .catch(error => {
        console.error('Error creating task:', error.response.data.error);
        // Handle error, e.g., display an error message to the user
      });
  };

  return (
    <div>
      <h1>Task Management</h1>
      <form onSubmit={handleTaskSubmit}>
        <label>
          Task Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Task Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <br />
        <label>
          Assign to:
          <select value={assignedUser} onChange={(e) => setAssignedUser(e.target.value)} required>
            <option value="" disabled>Select user</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default Task;
