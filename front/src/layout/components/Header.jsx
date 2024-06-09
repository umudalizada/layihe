import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <header className="topNav">
      <div className="topIcons">
      <FontAwesomeIcon className='topIcon' icon={faFacebook} />
      <FontAwesomeIcon className='topIcon' icon={faInstagram} />
      <FontAwesomeIcon className='topIcon' icon={faTiktok} />
      <FontAwesomeIcon className='topIcon' icon={faYoutube} />
      </div>
      <div className="topSign">
      <FontAwesomeIcon className='signIcon' icon={faArrowRightToBracket} />
        <Link className='Sign'>Sign</Link>
      </div>
    </header>
  )
}

export default Header
