import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => {
  return (
    <div className="search-box">
    <input type="text" placeholder="Search here" />
    <button type="submit">
    <FontAwesomeIcon className='searchIcon' icon={faMagnifyingGlass} />
    </button>
  </div>
  )
}

export default SearchBox
