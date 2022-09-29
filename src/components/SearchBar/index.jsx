import React from 'react';
import './styles.scss'

const SearchBar = () => {

    const onChange = ()=>{
        console.log("onChange function");
        // React.ChangeEventHandler;
    }

  return (
    <div>
            <input
      className="SearchBar"
      type="text"
      onChange={onChange}
      placeholder="Search by the title ..."
    />      
    </div>
  )
}

export default SearchBar