import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faTicket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const AllCards = () => {
    return (
        <div className="allCards">
            
            <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                <Link to="./detail">
                <img src="https://m.media-amazon.com/images/I/71JAK4XJv0L._AC_UF894,1000_QL80_.jpg" alt="" />
                </Link>
                
            </div>
            
            <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                <Link to="./detail">
                <img src="https://m.media-amazon.com/images/I/71JAK4XJv0L._AC_UF894,1000_QL80_.jpg" alt="" />
                </Link>
            </div>
            
            <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                <Link to="./detail">
                <img src="https://m.media-amazon.com/images/I/71JAK4XJv0L._AC_UF894,1000_QL80_.jpg" alt="" />
                </Link>
            </div>
            
            <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                <Link to="./detail">
                <img src="https://m.media-amazon.com/images/I/71JAK4XJv0L._AC_UF894,1000_QL80_.jpg" alt="" />
                </Link>
            </div>
            
            <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                <Link to="./detail">
                <img src="https://m.media-amazon.com/images/I/71JAK4XJv0L._AC_UF894,1000_QL80_.jpg" alt="" />
                </Link>
            </div>
            
            <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                <Link to="./detail">
                <img src="https://m.media-amazon.com/images/I/71JAK4XJv0L._AC_UF894,1000_QL80_.jpg" alt="" />
                </Link>
            </div>
            
            <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                <Link to="./detail">
                <img src="https://m.media-amazon.com/images/I/71JAK4XJv0L._AC_UF894,1000_QL80_.jpg" alt="" />
                </Link>
            </div>

            <div className="card">
                <Link to="./detail">
                    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                </Link>
                <Link to="./detail">
                <img src="https://m.media-amazon.com/images/I/71JAK4XJv0L._AC_UF894,1000_QL80_.jpg" alt="" />
                </Link>
            </div>


        </div>
    )
}

export default AllCards
