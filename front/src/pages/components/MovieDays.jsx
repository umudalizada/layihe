import React from 'react'
import HomeAsside from './HomeAsside'

const MovieDays = () => {
  return (
    <section id='movieDays'>
        <div className="container movieDays">
            <div className="allMovies">
                <div className="days">
                    <button>Today</button>
                    <button>Coming Soon</button>
                    <button>Tbale</button>
                </div>
            </div>
            <HomeAsside/>
        </div>
    </section>
  )
}

export default MovieDays
