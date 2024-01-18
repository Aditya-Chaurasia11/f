// App.js
import React, { useState } from 'react';
import UserForm from './Pages/User';
import AdminForm from './Pages/Admin';
import Task from './Pages/Task';
import LoginPage from './Pages/LoginPage';

function App() {
  const [isUserSection, setIsUserSection] = useState(true);

  const toggleSection = () => {
    setIsUserSection((prevIsUserSection) => !prevIsUserSection);
  };

  return (
    <div>
      <button onClick={toggleSection}>
        Switch to {isUserSection ? 'Admin' : 'User'} Section
      </button>
      {isUserSection ? <UserForm /> : <AdminForm />}
      <Task/>
      <LoginPage/>
    </div>
  );
}

export default App;
