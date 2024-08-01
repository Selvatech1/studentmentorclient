import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateMentor() {
  const [mentorName, setMentorName] = useState('');

  const handleCreateMentor = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/mentors', { name: mentorName });
      alert('Mentor created successfully');
      setMentorName('');
    } catch (error) {
      console.error('Error creating mentor:', error);
      alert('Failed to create mentor');
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2>Create Mentor</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleCreateMentor}>
            <div className="form-group">
              <label htmlFor="mentorName">Mentor Name</label>
              <input
                type="text"
                className="form-control"
                id="mentorName"
                placeholder="Enter mentor name"
                value={mentorName}
                onChange={(e) => setMentorName(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Create Mentor</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateMentor;
