import React from 'react';
import './styles.scss'

const SearchBar = () => {

    const mySearchBar = document.getElementById("mySearchBar");

    const onChange = ()=>{
        console.log("onChange function");
        // React.ChangeEventHandler;
    }
    const cleanPlaceholder =()=>{
        mySearchBar.placeholder="";
    }
    const completePlaceholder =()=>{
        mySearchBar.placeholder="Buscar...";
    }

  return (
    <div>
            <input
      className="SearchBar" id='mySearchBar'
      type="text"
    //   onChange={onChange}
      placeholder="Buscar ..."
      onFocus={cleanPlaceholder}
      onBlur={completePlaceholder}
    />      
    </div>
  )
}

export default SearchBar