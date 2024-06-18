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
                    <Link to="./detail">
                    <img src="https://parkcinema.az/uploads/structures/movies/images/d4MPhWEMprsrH35D8Yr6ytLK8we_resized.jpg" alt="" />

                    </Link>
                </div>
                <div className="card">
                    <Link to="./detail">
                        <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                    </Link>
                    <Link to="./detail">
                    <img src="https://parkcinema.az/uploads/structures/movies/images/d4MPhWEMprsrH35D8Yr6ytLK8we_resized.jpg" alt="" />

                    </Link>
                </div>
                
                <div className="card">
                    <Link to="./detail">
                        <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                    </Link>
                    <Link to="./detail">
                    <img src="https://parkcinema.az/uploads/structures/movies/images/d4MPhWEMprsrH35D8Yr6ytLK8we_resized.jpg" alt="" />

                    </Link>
                </div>
                
                <div className="card">
                    <Link to="./detail">
                        <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                    </Link>
                    <Link to="./detail">
                    <img src="https://parkcinema.az/uploads/structures/movies/images/d4MPhWEMprsrH35D8Yr6ytLK8we_resized.jpg" alt="" />

                    </Link>
                </div>


            </div>

        </section>
    )
}

export default TwoD
