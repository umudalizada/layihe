import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <section id='hero'>
      <div className="slider">
        <div className="image">
          <img src="https://cinepoligulf-1.s3.ap-south-1.amazonaws.com/uploads/images/movies/1712210346686blob" alt="" />
          <FontAwesomeIcon className='arrow leftArr' icon={faAngleLeft} />
        <FontAwesomeIcon className='arrow rightArr' icon={faChevronRight} />
        </div>

      </div>
    </section>
  )
}

export default Hero
