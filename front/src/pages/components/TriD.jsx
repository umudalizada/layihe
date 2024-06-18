import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faTicket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const TriD = () => {
  return (
    <section id='triD'>
      <div className="container triDinfo">
        <h2>3D</h2>
      </div>
      <div className="container allCards triD">

        <div className="card">
          <Link to="./detail">
            <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
          </Link>

          <Link to="./detail">
            <img src="https://static.karofilm.ru/uploads/poster/resize/eb/f2/33/5ef7845fee40ec1f156091f628.jpg" alt="" />

          </Link>
          <FontAwesomeIcon className='buyIcon' icon={faTicket} />
        </div>
        <div className="card">
          <Link to="./detail">
            <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
          </Link>

          <Link to="./detail">
            <img src="https://static.karofilm.ru/uploads/poster/resize/eb/f2/33/5ef7845fee40ec1f156091f628.jpg" alt="" />

          </Link>
          <FontAwesomeIcon className='buyIcon' icon={faTicket} />
        </div>
        <div className="card">
          <Link to="./detail">
            <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
          </Link>

          <Link to="./detail">
            <img src="https://static.karofilm.ru/uploads/poster/resize/eb/f2/33/5ef7845fee40ec1f156091f628.jpg" alt="" />

          </Link>
          <FontAwesomeIcon className='buyIcon' icon={faTicket} />
        </div>
        <div className="card">
          <Link to="./detail">
            <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
          </Link>

          <Link to="./detail">
            <img src="https://static.karofilm.ru/uploads/poster/resize/eb/f2/33/5ef7845fee40ec1f156091f628.jpg" alt="" />

          </Link>
          <FontAwesomeIcon className='buyIcon' icon={faTicket} />
        </div>


      </div>
    </section>
  )
}

export default TriD
