import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import CreateMentor from './components/CreateMentor';
import CreateStudent from './components/CreateStudent';
import AssignStudentsToMentor from './components/AssignStudentsToMentor';
import ChangeMentor from './components/ChangeMentor';
import ViewStudentsForMentor from './components/ViewStudentsForMentor';
import ViewPreviousMentor from './components/ViewPreviousMentor';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // State to hold the selected student ID
  const [studentId, setStudentId] = useState('');

  // Component to handle student ID input and view previous mentor
  const StudentIdInput = () => {
    const navigate = useNavigate();

    const handleInputChange = (e) => {
      setStudentId(e.target.value);
    };

    const handleSubmit = () => {
      navigate(`/view-previous-mentor/${studentId}`);
    };

    return (
      <div>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter student ID"
          value={studentId}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>View Previous Mentor</button>
      </div>
    );
  };

  return (
    <Router>
      <header className="App-header py-3 bg-primary text-white">
        <div className="container">
          <center><h1>Mentor-Student Management</h1></center>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/create-mentor">Create Mentor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create-student">Create Student</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/assign-students">Assign Students to Mentor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/change-mentor">Change Mentor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view-students">View Students for Mentor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view-previous-mentor">View Previous Mentor</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<h1 className="my-4">Welcome to Mentor-Student Management System</h1>} />
          <Route path="/create-mentor" element={<CreateMentor />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/assign-students" element={<AssignStudentsToMentor />} />
          <Route path="/change-mentor" element={<ChangeMentor />} />
          <Route path="/view-students" element={<ViewStudentsForMentor />} />
          <Route path="/view-previous-mentor" element={<StudentIdInput />} />
          <Route path="/view-previous-mentor/:studentId" element={<ViewPreviousMentor />} />
        </Routes>
      </div>
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2024 Mentor-Student Management. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
