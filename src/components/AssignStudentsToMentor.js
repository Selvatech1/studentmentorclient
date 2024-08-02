import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AssignStudentsToMentor = () => {
  const [mentorId, setMentorId] = useState('');
  const [studentIds, setStudentIds] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleAssign = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/mentors/${mentorId}/students`, {
        studentIds: studentIds.split(',').map(id => id.trim())
      });
      setMessage('Students assigned successfully');
      setError('');
      setMentorId('');
      setStudentIds('');
      console.log('Students assigned successfully:', response.data);
    } catch (error) {
      setMessage('');
      if (error.response) {
        setError(`Error: ${error.response.data.error}`);
      } else {
        setError('Error: Unable to assign students');
      }
      console.error('Error assigning students:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2>Assign Students to Mentor</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleAssign}>
            <div className="form-group">
              <label htmlFor="mentorId">Mentor ID</label>
              <input
                type="text"
                className="form-control"
                id="mentorId"
                placeholder="Enter Mentor ID"
                value={mentorId}
                onChange={(e) => setMentorId(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentIds">Student IDs (comma separated)</label>
              <input
                type="text"
                className="form-control"
                id="studentIds"
                placeholder="Enter Student IDs"
                value={studentIds}
                onChange={(e) => setStudentIds(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Assign Students</button>
          </form>
          {message && <div className="alert alert-success mt-3">{message}</div>}
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default AssignStudentsToMentor;
