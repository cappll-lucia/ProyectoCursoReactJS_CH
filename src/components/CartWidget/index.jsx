import React from 'react';
import './styles.scss';
import {BsFillCartFill} from 'react-icons/bs';

const CartWidget = ({quantity}) => {
  return (
    <div className='cartIcon'>
        <BsFillCartFill/> 
        <span className='quantity'> | {quantity} items</span>
    </div>
  )
}

export default CartWidget