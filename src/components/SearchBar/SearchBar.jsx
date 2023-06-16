import React from 'react';

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
      icon
    </button>
  </form>
   );
}

export default SearchBar;