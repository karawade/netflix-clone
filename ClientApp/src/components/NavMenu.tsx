import * as React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useEffect, useState } from 'react';

const NavMenu = () => {
    const [hidden, setHidden] = useState<boolean>(false);
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
    }, []);
    return (
        <header>
            <nav className={`navbar fixed-top navmenu ${!hidden && 'bg-dark'}`}>
                <Link to="/" className="navbar-brand navmenu_brand ms-3" >
                    <img src="/netflix_logo.png" alt="Netflix" />
                </Link>
                <img src="/netflix_profile.png" alt="Profile" className="navmenu_profile me-3" />
            </nav>
        </header>
    );
}

export default NavMenu;
