import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faTicket } from '@fortawesome/free-solid-svg-icons'


const AllCards = () => {
  return (
    <div className="allCards">
            <div className="card">
    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
        <img src="https://i.ebayimg.com/images/g/w2kAAOSwdhlbAZTy/s-l1600.jpg" alt="" />
    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
    </div>
    <div className="card">
    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
        <img src="https://m.media-amazon.com/images/I/51qboNmFw3L._AC_UF894,1000_QL80_.jpg" alt="" />
    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
    </div>
    <div className="card">
    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
        <img src="https://c8.alamy.com/comp/BGMMYM/avatar-year-2009-director-james-cameron-movie-poster-usa-BGMMYM.jpg" alt="" />
    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
    </div>
    <div className="card">
    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
        <img src="https://kinohype.co/uploads/posts/2024-04/masha-i-medved.webp" alt="" />
    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
    </div>
    <div className="card">
    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
        <img src="https://c4.wallpaperflare.com/wallpaper/153/860/948/movie-poster-star-wars-star-wars-the-rise-of-skywalker-2019-year-movies-hd-wallpaper-preview.jpg" alt="" />
    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
    </div>
    <div className="card">
    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
        <img src="https://m.media-amazon.com/images/I/4152cPyWf2L._AC_UF894,1000_QL80_.jpg" alt="" />
    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
    </div>
    <div className="card">
    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
        <img src="https://m.media-amazon.com/images/I/71JAK4XJv0L._AC_UF894,1000_QL80_.jpg" alt="" />
    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
    </div>

    <div className="card">
    <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
        <img src="https://image.tmdb.org/t/p/original/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" alt="" />
    <FontAwesomeIcon className='buyIcon' icon={faTicket} />
    </div>


  </div>
  )
}

export default AllCards
