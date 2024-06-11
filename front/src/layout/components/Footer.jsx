import { faClock, faCopyright, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <section id='footer'>
      <div className='container footer'>
        <div className="footerleft">
          <img src="https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=crop,gravity=auto,metadata=none,quality=85,width=250,height=77/production/2/148abd7bc172a25b9feb84c948ff1c86.png" alt="" />
        </div>
        <div className="footerRight">
          <ul>
            <li><FontAwesomeIcon className='footicon' icon={faClock} />10:00-02:00</li>
            <li><FontAwesomeIcon className='footicon' icon={faLocationDot} />Khalglar Dostlughu M/s</li>
          </ul>
        </div>
      </div>
      <div className="autor">
        <h2><FontAwesomeIcon icon={faCopyright} />2024 Umud Alizada</h2>
        <div className="footerSocial">
            <FontAwesomeIcon className='topIcon' icon={faFacebook} />
            <FontAwesomeIcon className='topIcon' icon={faInstagram} />
            <FontAwesomeIcon className='topIcon' icon={faTiktok} />
        </div>
      </div>
    </section>

  )
}

export default Footer
