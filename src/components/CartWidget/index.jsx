import React, { useContext } from 'react';
import './styles.scss';
import {BsFillCartFill} from 'react-icons/bs';
import { Shop } from '../../context/ShopProvider';

const CartWidget = () => {

  const {getItemsQty}=useContext(Shop);

  let cant = getItemsQty();

  return (
    <div className='cartIcon'>
        <BsFillCartFill/> 
        <span className='quantity'> | {cant} items</span>
    </div>
  )
}

export default CartWidget