import React from 'react';
import './styles.scss';
import {BsSearch} from 'react-icons/bs';

const SearchBar = () => {

    const mySearchBar = document.getElementById("mySearchBar");

    const cleanPlaceholder =()=>{
        mySearchBar.placeholder="";
    }
    const completePlaceholder =()=>{
        mySearchBar.placeholder="Buscar...";
    }

  return (
      <div className='SearchBar'>
        <span className='SearchBarBtn'><BsSearch/></span>
        <input
          className="SearchInput" id='mySearchBar'
          type="text"
          placeholder="Buscar ..."
          onFocus={cleanPlaceholder}
          onBlur={completePlaceholder}
        />
    </div>
  )
}

export default SearchBar