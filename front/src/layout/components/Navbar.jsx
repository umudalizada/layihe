import React from 'react'
import Header from './Header'
import { Link as ScrollLink } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faBars, faTicket, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <Header />
      <nav className='navbarBody'>
        <div className="container navbar">
          <div className="logo">
            <h5 className='h5'>
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </h5>
            <img src="https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=crop,gravity=auto,metadata=none,quality=85,width=245,height=75/production/2/148abd7bc172a25b9feb84c948ff1c86.png" alt="" />
            <h5 className='h5'>
              <FontAwesomeIcon className='hambur' icon={faBars} />
            </h5>
          </div>
          <ul>
            <li>
              <Link to="home" className='navLink' smooth={true} duration={500}>Home</Link>
            </li>
            <li>
              <Link to="movies" className='navLink' smooth={true} duration={500}>Movies</Link>
            </li>
            <li>
              <Link to="showtimes" className='navLink' smooth={true} duration={500}>Showtimes</Link>
            </li>
            <li>
              <ScrollLink to="about" className='navLink' smooth={true} duration={500}>About</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" className='navLink' smooth={true} duration={500}>Contact</ScrollLink>
            </li>
            <li>
              <ScrollLink to="hall" className='navLink' smooth={true} duration={500}>Hall</ScrollLink>
            </li>
            <li>
              <ScrollLink to="bar" className='navLink' smooth={true} duration={500}>Bar</ScrollLink>
            </li>
            <li>
              <Link to="ticket" className='navLink' smooth={true} duration={500}>
                <FontAwesomeIcon icon={faTicket} />
                <p className="ticketNum">
                  1
                </p>
              </Link>
            </li>
            <li>
              <Link to="user" className='navLink' smooth={true} duration={500}>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
