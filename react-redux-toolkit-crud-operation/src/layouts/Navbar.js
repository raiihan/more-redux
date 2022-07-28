import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <Link to={'/'} className="nav-link">Home</Link>
            <Link to={'/addbook'} className="nav-link">Add Book</Link>
            <Link to={'/showbook'} className="nav-link">Show Book</Link>
        </nav>
    );
};

export default Navbar;