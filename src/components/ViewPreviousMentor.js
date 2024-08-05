import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewPreviousMentor = ({ studentId }) => {
  const [mentor, setMentor] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const response = await axios.get(`https://mentorstudent-ivdv.onrender.com/api/students/${studentId}/mentor`);
        setMentor(response.data);
        setError('');
      } catch (err) {
        console.error('Error fetching mentor:', err);
        setError('Failed to fetch mentor.');
      }
    };

    if (studentId) {
      fetchMentor();
    }
  }, [studentId]);

  return (
    <div>
      <h2>Previous Mentor</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {mentor ? (
        <div>
          <p><strong>Name:</strong> {mentor.name}</p>
          <p><strong>ID:</strong> {mentor.name}</p>
          {/* Add other mentor details if needed */}
        </div>
      ) : (
        <p>No mentor assigned.</p>
      )}
    </div>
  );
};

export default ViewPreviousMentor;
