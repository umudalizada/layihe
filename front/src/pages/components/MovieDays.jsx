import React, { useState } from 'react';
import HomeAsside from './HomeAsside';
import SearchBox from './SearchBox';
import FilterComp from './FilterComp';
import AllCards from './AllCards';
import Smooth from '../../hook/Smooth';

const MovieDays = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { ref } = Smooth();
  return (
    <section id='movieDays'>
      <div ref={ref} className="container movieDays">
        <div className="allMovies">
          <div className="filters">
            <FilterComp />
            <SearchBox setSearchQuery={setSearchQuery} />
          </div>
          <AllCards searchQuery={searchQuery} />
        </div>
        <HomeAsside />
      </div>
    </section>
  );
}

export default MovieDays;
