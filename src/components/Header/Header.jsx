import React from "react";

function Header() {
  return(
    <header className="header" style={{backgroundColor: 'red'}} >
      <div className="containner">
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
      </div>



    </header>
  );
}



export default Header;