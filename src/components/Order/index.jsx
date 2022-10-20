import React, { useContext } from 'react'
import {Shop} from '../../context/ShopProvider';

const Order = () => {


  const {cart, removeItem, clearCart, getTotal} =useContext(Shop);

  return (
    <div className='Order'>
      <div className="ClientInfo">
        <span>Cliente: </span>
      </div>
    </div>
  )
}

export default Order