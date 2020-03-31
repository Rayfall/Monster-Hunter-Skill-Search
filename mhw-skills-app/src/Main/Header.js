import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>            
            <div className="nav-item"><Link to="/"><span className="nav-logo">MH:World Skill Builder</span></Link></div>
            <div className="nav-item"><Link to="/">Home</Link></div>
            <div className="nav-item"><Link to="/search">Search</Link></div>
            <div className="nav-item"><Link to="/build">Build</Link></div>
            <div className="nav-item"><Link to="/bestPractices">Best Practices</Link></div>
            <div className="nav-item"><Link to="/userList">Current List</Link></div>
        </>
    );
}