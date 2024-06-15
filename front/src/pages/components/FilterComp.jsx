import React from 'react'
import { Link } from 'react-router-dom'


const FilterComp = () => {
  return (
    <div className='filterButtons'>
      <button className="filterButton">All</button>
      <button className="filterButton">IMAX</button>
      <button className="filterButton">LaseR</button>
      <button className="filterButton">3D</button>
      <button className="filterButton">2D</button>
      <Link to="./buyTicket" className='buyTicket'>Buy Ticket
</Link>
    </div>
  )
}

export default FilterComp
