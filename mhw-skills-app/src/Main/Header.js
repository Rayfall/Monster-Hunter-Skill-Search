import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Header.css";

export default function Header() {
    return (
        <div className="header">

            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>

            <label for="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>

            <div><Link to="/"><img className="nav-picture" src="https://res.cloudinary.com/aetherfall/image/upload/v1585753458/Logo-MHW_uhavul.webp" alt="MH:World Skill Builder"/></Link></div>

            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/build">Build</Link></li>
                <li><Link to="/bestPractices">Best Practices</Link></li>
                <li><Link to="/userList">Current List</Link></li>
                </ul>
            </div>

        </div>
    );
}