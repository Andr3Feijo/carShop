import React from 'react';

import { BsFillBagHeartFill } from 'react-icons/bs';

function CartButton() {
  return (  
    <button type='button' className='cart__button' >
      <BsFillBagHeartFill />
    </button>
  );
}

export default CartButton;