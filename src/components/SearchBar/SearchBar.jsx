import React from 'react';
import{BsSearch} from 'react-icons/bs' ;

function SearchBar() {
  return ( 
    <form action="">
    <input 
    type="search" 
    placeholder="Buscar Produto"
    className="search__input"
    required
    />

    <button  type="submit" className="search__button">
      <BsSearch />
    </button>
  </form>
   );
}

export default SearchBar;