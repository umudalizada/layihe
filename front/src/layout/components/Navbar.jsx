import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faBars, faComments, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <>
      <nav className='navbarBody'>
        <div className="container navbar">
          <div className="asistanAbsalute">
            <FontAwesomeIcon className='asistan' icon={faComments} />
          </div>
          <div className="logo">
            <h5 className='h5' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </h5>
            <img src="https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=crop,gravity=auto,metadata=none,quality=85,width=245,height=75/production/2/148abd7bc172a25b9feb84c948ff1c86.png" alt="Logo" />
            <h5 className='h5'>
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </h5>
          </div>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/" className='navLink' onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/table" className='navLink' onClick={closeMenu}>Movie Table</Link>
            </li>
            <li>
              <Link to="/contact" className='navLink' onClick={closeMenu}>Contact</Link>
            </li>
            <li>
              <Link to="/about" className='navLink' onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="/profile" className='navLink' onClick={closeMenu}>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
