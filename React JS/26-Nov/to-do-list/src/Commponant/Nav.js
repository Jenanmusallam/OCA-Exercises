import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white',
        fontSize: '1.5rem',
        textDecoration: 'none',
    };

    return (
        <div>
            <nav>
                <h2>Jenan</h2>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} to="/toDoList">
                        <li >To Do List</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
