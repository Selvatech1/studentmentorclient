import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewStudentsForMentor = () => {
    const [mentors, setMentors] = useState([]);
    const [selectedMentor, setSelectedMentor] = useState('');
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const mentorsResponse = await axios.get('https://mentorstudent-ivdv.onrender.com/api/mentors');
                setMentors(mentorsResponse.data);
            } catch (error) {
                console.error('Error fetching mentors:', error);
            }
        };

        fetchMentors();
    }, []);

    useEffect(() => {
        const fetchStudents = async () => {
            if (selectedMentor) {
                try {
                    const studentsResponse = await axios.get(`http://localhost:5000/api/mentors/${selectedMentor}/students`);
                    setStudents(studentsResponse.data);
                } catch (error) {
                    console.error('Error fetching students:', error);
                }
            }
        };

        fetchStudents();
    }, [selectedMentor]);

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h2>View Students for Mentor</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="selectMentor">Select Mentor:</label>
                        <select
                            className="form-control"
                            id="selectMentor"
                            onChange={(e) => setSelectedMentor(e.target.value)}
                            value={selectedMentor}
                        >
                            <option value="">Select a mentor</option>
                            {mentors.map((mentor) => (
                                <option key={mentor._id} value={mentor._id}>{mentor.name}</option>
                            ))}
                        </select>
                    </div>
                    <ul className="list-group mt-3">
                        {students.map((student) => (
                            <li key={student._id} className="list-group-item">{student.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ViewStudentsForMentor;
