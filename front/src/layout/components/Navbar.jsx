import React from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faBars, faComments, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <Header />
      <nav className='navbarBody'>
        <div className="container navbar">
          <div className="asistanAbsalute">
          <FontAwesomeIcon className='asistan' icon={faComments} />
          </div>
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
              <Link to="/" className='navLink' smooth={true} duration={500}>Home</Link>
            </li>

            <li>
              <Link to="./showtime" className='navLink' smooth={true} duration={500}>
                Buy
              </Link>
            </li>
            <li>
              <Link to="./table" className='navLink' smooth={true} duration={500}>
                Movie Table
              </Link>
            </li>
            <li>
              <Link to="./contact" className='navLink' smooth={true} duration={500}>Contact</Link>
            </li>
            <li>
              <Link to="./about" className='navLink' smooth={true} duration={500}>About</Link>
            </li>

            {/* <li>
              <ScrollLink to="hall" className='navLink' smooth={true} duration={500}>Hall</ScrollLink>
            </li>
            <li>
              <ScrollLink to="bar" className='navLink' smooth={true} duration={500}>Bar</ScrollLink>
            </li> */}

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
