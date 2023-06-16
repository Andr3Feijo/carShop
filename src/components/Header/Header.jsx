import React from "react";

function CartShop() {
  return(
    <header className="CartShop" style={{backgroundColor: 'red'}} >
      <div className="containner" style={{maxWidth: '800px', margin: '0 auto'}} >
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



   test </header>
  );
}



export default CartShop;