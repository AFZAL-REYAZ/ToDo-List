import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='header'>
        <ul className="heading">
            <li className="litag"><Link to="/">Home</Link></li>
            <li className="litag"><Link to="/about">About</Link></li>
            <li className="litag"><Link to="/form">Login</Link></li>
        </ul>
    </div>
  )
}

export default Navbar