import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faFilm } from '@fortawesome/free-solid-svg-icons'


const FilterComp = () => {
  return (
    <div className='filterButtons'>
      <button className="filterButton">All</button>
      <button className="filterButton">IMAX</button>
      <button className="filterButton">LaseR</button>
      <button className="filterButton">3D</button>
      <button className="filterButton">2D</button>
    </div>
  )
}

export default FilterComp
