import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({ setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search here"
        onChange={handleInputChange}
      />
      <button type="submit">
        <FontAwesomeIcon className='searchIcon' icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default SearchBox;
