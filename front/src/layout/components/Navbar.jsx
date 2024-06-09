import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTicket, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
      <Header />
      <nav className='navbarBody'>
        <div className="conatiner navbar">
          <div className="logo">
            <img src="https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=crop,gravity=auto,metadata=none,quality=85,width=245,height=75/production/2/148abd7bc172a25b9feb84c948ff1c86.png" alt="" />
          </div>
          <ul>
            <li>
              <Link className='navLink'>Home</Link>
            </li>
            <li>
              <Link className='navLink'>Movies</Link>
            </li>
            <li>
              <Link className='navLink'>Showtimes</Link>
            </li>
            <li>
              <Link className='navLink'>About</Link>
            </li>
            <li>
              <Link className='navLink'>Contact</Link>
            </li>
            <li>
              <Link className='navLink'>
                <FontAwesomeIcon icon={faTicket} />
                <p className="ticketNum">
                  1
                </p>
              </Link>
            </li>
            <li>
              <Link className='navLink'>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
          </ul>
          <div className="hamburger">
            <FontAwesomeIcon className='hambur' icon={faBars} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
