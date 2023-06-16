import React from 'react';

import { LuShoppingCart } from 'react-icons/lu';

import './cartButton.css';

function CartButton() {
  return (  
    <button type='button' className='cart__button' >
      <LuShoppingCart/>
      <span className='bag-status'>1</span>
    </button>
  );
}

export default CartButton;