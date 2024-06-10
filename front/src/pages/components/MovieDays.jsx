import React from 'react'
import HomeAsside from './HomeAsside'
import SearchBox from './SearchBox'
import FilterComp from './FilterComp'


const MovieDays = () => {
  return (
    <section id='movieDays'>
      <div className="container movieDays">
        <div className="allMovies">
          <div className="days">
            <button>Today</button>
            <button>ComingSoon</button>
            <button>Table</button>
          </div>
          <div className="filters">
            <SearchBox/>
            <FilterComp/>
          </div>
          <div className="allCards">
            <div className="card">

            </div>
          </div>
        </div>
        <HomeAsside />
      </div>
    </section>
  )
}

export default MovieDays
