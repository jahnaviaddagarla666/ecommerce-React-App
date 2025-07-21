// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <div className="logo">J!shop🛍️</div>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/account">Account</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
