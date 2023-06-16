import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import './Header.css';

function CartShop() {
  return(
    <header className="CartShop" >
      <div className="containner" >
       <SearchBar/>
       <button>cart</button>
      </div>



   </header>
  );
}



export default CartShop;