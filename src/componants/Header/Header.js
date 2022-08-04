import React from 'react';
// import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (

        <div className="navber">
            <h2>Product Review Website</h2>
            <Link to='/'>Home</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about'>About</Link>

            {/* <CustomLink to='/reviews'>Reviews</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/about'>About</CustomLink> */}

        </div>

    );
};

export default Header;