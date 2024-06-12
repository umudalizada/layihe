import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faTicket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const TwoD = () => {
    return (

        <section id='twoD'>
            <div className="container triDinfo">
                <h2>2D</h2>
            </div>
            <div className="container allCards triD">

                <div className="card">
                    <Link to="./detail">
                        <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                    </Link>
                    <img src="https://parkcinema.az/uploads/structures/movies/images/d4MPhWEMprsrH35D8Yr6ytLK8we_resized.jpg" alt="" />
                    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
                </div>
                <div className="card">
                    <Link to="./detail">
                        <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                    </Link>
                    <img src="https://i.ebayimg.com/images/g/zPgAAOSw8QBlzmsQ/s-l1200.jpg" alt="" />
                    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
                </div>
                <div className="card">
                    <Link to="./detail">
                        <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                    </Link>
                    <img src="https://cdna.artstation.com/p/assets/images/images/016/707/642/large/puja-kar-spider-verse-poster-design2.jpg?1553156456" alt="" />
                    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
                </div>
                <div className="card">
                    <Link to="./detail">
                        <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                    </Link>
                    <img src="https://artofthemovies.co.uk/cdn/shop/products/IMG_6171-176975_1024x1024@2x.jpg?v=1611688357" alt="" />
                    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
                </div>


            </div>

        </section>
    )
}

export default TwoD
