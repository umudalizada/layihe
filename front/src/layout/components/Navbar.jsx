import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faComments, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openChat = () => {
    navigate('/chat');
  };

  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className='navbarBody'>
      <div className="container navbar">
        <div className="asistanAbsalute" onClick={openChat}>
          <FontAwesomeIcon className='asistan' icon={faComments} />
        </div>

        <div className="logo">
          <h5 className='h5' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </h5>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <h5 className='h5'>
            <Link to={user ? "/profile" : "/login"} className='navLink' onClick={closeMenu}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
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
          {user && user.user === true ? (
            <li>
              <Link to="/admin" className='navLink' onClick={closeMenu}>Admin</Link>
            </li>
          ) : null}
          <li>
            <Link to={user ? "/profile" : "/login"} className='navLink' onClick={closeMenu}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
