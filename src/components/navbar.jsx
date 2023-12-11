import React from 'react';
import './navbar.scss';
function Navbar () {
    return (
        <>
        <div className="fake-navbar"></div>
        <nav>
            <ul>
                <li><a href="/about">Qui nous sommes ?</a></li>
                <li><a href="/">Accueil</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        
        </>
    )
}

export default Navbar;