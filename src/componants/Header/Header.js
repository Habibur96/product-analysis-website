import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

;

const Header = () => {
    return (

        <div className="navber">
            <h2>Product Review Website</h2>
            <Link to='/'>Home</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about'>About</Link>


        </div>

    );
};

export default Header;