import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import logo from '../../../logo.png';
import './NavBar.css';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='flex justify-between items-center'>
            <img src={logo} alt="" width={120} height={56} />
            <div className='flex bg-gray-200/30 p-1 w-1/3 rounded-md'>
                <label className='text-gray-100/30 mr-1' htmlFor="search"><FontAwesomeIcon icon={faSearch} /></label>
                <input className='outline-none border-0 bg-transparent caret-white text-white font-normal w-full' type="search" name="" id="search" />
            </div>
            <div className={`block lg:hidden text-3xl z-20 ${open ? 'text-[#F9A51A]' : 'text-white'}`} onClick={() => setOpen(!open)}>
                {
                    open ? <FontAwesomeIcon icon={faXmark} /> :
                        <FontAwesomeIcon icon={faBars} />
                }
            </div>
            <nav className={`w-1/2 text-lg text-[#F9A51A] lg:text-white font-normal bg-gray-100 lg:bg-transparent flex flex-col lg:flex-row justify-between absolute right-0 lg:static duration-500 ${open ? 'top-0' : 'top-[-500px]'}`}>
                <Link to="/news">News</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contact">Contact</Link>
                <Link className='button' to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default NavBar;