import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faTicket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Laser = () => {
    return (
        <section id="laser">
            <div className="container triDinfo">
                <h2>IMAX</h2>
            </div>
            <div className="container allCards triD">

                <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                <Link to="./detail">
                <img src="https://m.media-amazon.com/images/I/71eqa1EAKCL._AC_UF1000,1000_QL80_.jpg" alt="" />

                </Link>
                </div>
                <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                <Link to="./detail">
                <img src="https://m.media-amazon.com/images/I/71eqa1EAKCL._AC_UF1000,1000_QL80_.jpg" alt="" />

                </Link>
                </div>
                <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                <Link to="./detail">
                <img src="https://m.media-amazon.com/images/I/71eqa1EAKCL._AC_UF1000,1000_QL80_.jpg" alt="" />

                </Link>
                </div>
                <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                <Link to="./detail">
                <img src="https://m.media-amazon.com/images/I/71eqa1EAKCL._AC_UF1000,1000_QL80_.jpg" alt="" />

                </Link>
                </div>


            </div>
        </section>
    )
}

export default Laser
