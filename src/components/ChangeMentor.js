import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChangeMentor = () => {
    const [students, setStudents] = useState([]);
    const [mentors, setMentors] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedMentor, setSelectedMentor] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentsResponse = await axios.get('https://mentorstudent-ivdv.onrender.com/api/students');
                const mentorsResponse = await axios.get('https://mentorstudent-ivdv.onrender.com/api/mentors');
                setStudents(studentsResponse.data);
                setMentors(mentorsResponse.data);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to fetch data.');
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/students/${selectedStudent}/mentor`, {
                mentorId: selectedMentor
            });
            setError(''); // Clear previous errors
            alert('Mentor changed successfully.');
        } catch (err) {
            console.error('Error changing mentor:', err);
            setError('Failed to change mentor.');
        }
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h2>Change Mentor for Student</h2>
                </div>
                <div className="card-body">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit} className="form-group">
                        <div className="form-group">
                            <label htmlFor="selectStudent">Select Student:</label>
                            <select
                                className="form-control"
                                id="selectStudent"
                                onChange={(e) => setSelectedStudent(e.target.value)}
                                value={selectedStudent}
                            >
                                <option value="">Select a student</option>
                                {students.map((student) => (
                                    <option key={student._id} value={student._id}>{student.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group mt-2">
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
                        <button type="submit" className="btn btn-primary mt-2">Change Mentor</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangeMentor;
