import React, { useEffect, useRef, useState } from 'react';
import './navbar.scss';
import aikido from "../../assets/icons/karate.png";
import blackBelt from "../../assets/icons/black-belt.png";
import useClickOutside from '../../hooks/useClickOutside';
import { useAuth } from '../../services/authenticationService';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
    const navbarRef = useRef(null);
    const burgerRef = useRef(null);
    useClickOutside(navbarRef, () => setIsMobileMenuOpened(false), [burgerRef]);
    const navigator=useNavigate();
    const auth = useAuth();

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            const isMobileDevice = windowWidth <= 768;
            setIsMobile(isMobileDevice);
            if (!isMobileDevice) setIsMobileMenuOpened(false);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const logout = () => {
        auth.logout();
        navigator("/sensei/admin/login");

    }

    return (
        <>
            <div className="general-cont-navbar">

                <div className="fake-navbar"></div>
                <img ref={burgerRef} onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)} className={'burger ' + (isMobile && isMobileMenuOpened ? 'burger-open' : '')} src={blackBelt} alt="akido icon" />
                <nav ref={navbarRef} className={isMobile && isMobileMenuOpened ? "open-navbar-mobile" : "navbar"}>
                    {!auth.isAuthenticated ?
                        <ul>
                            <li><a href="/about">Qui nous sommes ?</a></li>
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/calendar">Calendar</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul> :

                        <ul>
                            <li><a href="/sensei/admin/events">Événements</a></li>
                            <button className='navbar-sign-out' onClick={logout}>Se déconnecter</button>
                        </ul>
                    }
                </nav>
            </div>

        </>
    )
}

export default Navbar;