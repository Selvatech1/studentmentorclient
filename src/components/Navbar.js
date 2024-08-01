import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Mentor-Student Management</Link>
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
    );
};

export default Navbar;
