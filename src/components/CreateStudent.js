import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://mentorstudent-ivdv.onrender.com/api/students', { name, email });
      console.log('Student created:', response.data);
      alert('Student created successfully');
      setName('');
      setEmail('');
      setErrorMessage('');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data); // Display backend validation error message
      } else {
        setErrorMessage('Failed to create student. Please try again.'); // Generic error message
      }
      console.error('Error creating student:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2>Create Student</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="studentName">Name</label>
              <input
                type="text"
                className="form-control"
                id="studentName"
                placeholder="Enter student name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="studentEmail"
                placeholder="Enter student email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Create Student</button>
          </form>
          {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
