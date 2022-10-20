import React, { useContext } from 'react';
import './styles.scss';
import {BsFillCartFill} from 'react-icons/bs';
import { Shop } from '../../context/ShopProvider';

const CartWidget = () => {

  const {cart}=useContext(Shop);

  return (
    <div className='cartIcon'>
        <BsFillCartFill/> 
        <span className='quantity'> | {cart.length} items</span>
    </div>
  )
}

export default CartWidget