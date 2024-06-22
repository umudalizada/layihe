import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faBars, faComments, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openChat = () => {
    navigate('/chat'); // Navigate to the chat page
  };

  return (
    <nav className='navbarBody'>
      <div className="container navbar">
        <div className="asistanAbsalute" onClick={openChat}>
          <FontAwesomeIcon className='asistan' icon={faComments} />
        </div>
        <Link to="/">
          <div className="logo">
            <h5 className='h5' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </h5>
            <img src={logo} alt="Logo" />
            <h5 className='h5'>
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </h5>
          </div>
        </Link>
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
  );
};

export default Navbar;
