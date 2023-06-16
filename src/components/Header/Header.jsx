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
        </form>
      </div>



    </header>
  );
}



export default Header;