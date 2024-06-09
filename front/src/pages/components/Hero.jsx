import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <section id='hero'>
      <div className="slider">
        <div className="image">
          <img src="https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=scale-down,gravity=auto,metadata=none,quality=85,width=2000/production/241/f0b74118c732a5e6188119c8b5fef2bb.jpg" alt="" />
          <FontAwesomeIcon className='arrow leftArr' icon={faAngleLeft} />
        <FontAwesomeIcon className='arrow rightArr' icon={faChevronRight} />
        </div>

      </div>
    </section>
  )
}

export default Hero
