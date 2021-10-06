import * as React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useState } from 'react';

const NavMenu = () => {
    return (
        <header className="mb-5">
            <nav className="navbar fixed-top navmenu bg-red border-bottom">
                <div className="container">
                    <Link to="/" className="navbar-brand navmenu_brand" >
                        <img src="/netflix_logo.png" alt="Netflix" />
                    </Link>
                    <img src="/netflix_profile.png" alt="Profile" className="navmenu_profile"/>
                </div>
            </nav>
        </header>
    );
}

export default NavMenu;
