import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewStudentIDs = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student IDs</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>{student.name} - {student._id}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewStudentIDs;
