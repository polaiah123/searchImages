import React, { useState } from 'react'
import './SearchBar.css';

function SearchBar({onSubmit}) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
  event.preventDefault();
    onSubmit(term);
  
     
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
    //console.log(term);

   }
  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
      <label>Search Images</label>
      <input value={term} onChange={handleChange}/>
      </form>
    </div>
  )
};

export default SearchBar;