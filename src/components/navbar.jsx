import React, { useEffect, useState } from 'react';
import './navbar.scss';
import aikido from "../assets/icons/karate.png";
function Navbar () {
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        const windowWidth = window.innerWidth;
        const isMobileDevice = windowWidth <= 768;
        setIsMobile(isMobileDevice);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    return (
        <>
        <div className="fake-navbar"></div>
        <img  onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)} className={'burger ' + (isMobile && isMobileMenuOpened ? 'burger-open' : '')} src={aikido} alt="akido icon" />
        <nav className={isMobile && isMobileMenuOpened ? "open-navbar-mobile" : "navbar"}>
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