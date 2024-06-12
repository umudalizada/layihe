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
                    <img src="https://m.media-amazon.com/images/I/71eqa1EAKCL._AC_UF1000,1000_QL80_.jpg" alt="" />
                    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
                </div>
                <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                    <img src="https://www.badboys.movie/images/synopsis_poster.jpg" alt="" />
                    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
                </div>
                <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                    <img src="https://parkcinema.az/uploads/structures/movies/images/kinopoisk.ru-Space-Station-3D-378160_1_resized.jpg" alt="" />
                    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
                </div>
                <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                    <img src="https://parkcinema.az/uploads/structures/movies/images/472257_resized.jpg" alt="" />
                    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
                </div>


            </div>
        </section>
    )
}

export default Laser
