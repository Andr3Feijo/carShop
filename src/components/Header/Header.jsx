import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import './Header.css';
import CartButton from "../CartButton/CartButton";

function CartShop() {
  return(
    <header className="CartShop" >
      <div className="containner" >
       <SearchBar/>
       <CartButton />
      </div>



   </header>
  );
}



export default CartShop;