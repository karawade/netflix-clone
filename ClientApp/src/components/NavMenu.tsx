import * as React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useEffect, useState } from 'react';

const NavMenu = () => {
    const [ hidden, setHidden] = useState<boolean>(false);
    const captureScrollPosition = () => {
        if (window.scrollY > 100) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', captureScrollPosition);
        return () => window.removeEventListener('scroll', captureScrollPosition);
    },[]);
    return (
        <header className="mb-5">
            <nav className={`navbar fixed-top navmenu ${!hidden && 'bg-light'}`}>
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
