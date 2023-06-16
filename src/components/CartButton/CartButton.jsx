import React from 'react';

import { BsFillBagHeartFill } from 'react-icons/bs';

import './cartButton.css';

function CartButton() {
  return (  
    <button type='button' className='cart__button' >
      <BsFillBagHeartFill />
      <span className='bag-status'></span>
    </button>
  );
}

export default CartButton;