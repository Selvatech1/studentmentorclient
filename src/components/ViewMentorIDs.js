import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewMentorIDs = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get('/api/mentors');
        setMentors(response.data);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div>
      <h2>Mentor IDs</h2>
      <ul>
        {mentors.map(mentor => (
          <li key={mentor._id}>{mentor.name} - {mentor._id}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewMentorIDs;
