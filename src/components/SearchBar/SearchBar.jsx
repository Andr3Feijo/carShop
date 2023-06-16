import React, { useState } from 'react';
import{BsSearch} from 'react-icons/bs' ;
import './SearchBar.css'

function SearchBar() {
  
  const [searchValue,setSearchValue] = useState('');

  return ( 
    <form action="" className='search-bar'>
    <input 
    type="search" 
    placeholder="Buscar Produto"
    className="search__input"
    onChange={({target}) => setSearchValue (target.value)}
    required
    />
    { searchValue }  
    <button  type="submit" className="search__button">
      <BsSearch />
    </button>
  </form>
   );
}

export default SearchBar;