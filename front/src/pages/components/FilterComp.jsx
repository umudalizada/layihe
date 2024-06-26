  import React from 'react';
  import { Link } from 'react-router-dom';

  const FilterComp = () => {

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <div className='filterButtons'>
        <button className="filterButton" onClick={() => scrollToSection('movieDays')}>All</button>
        <button className="filterButton" onClick={() => scrollToSection('laser')}>IMAX</button>
        <button className="filterButton" onClick={() => scrollToSection('triD')}>3D</button>
        <button className="filterButton" onClick={() => scrollToSection('twoD')}>2D</button>
        <Link to="/buyticket/"> <button  className='buyTicket'>Buy Ticket</button></Link>

      </div>
    );
  }

  export default FilterComp;
