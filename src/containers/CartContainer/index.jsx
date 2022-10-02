import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {Shop} from '../../context/ShopProvider';
// import'../../../public/gallery/'
import './styles.scss';

const CartContainer = () => {

  const {cart, removeItem, clearCart} =useContext(Shop);

  return (
    <div className='cartContainer'>
      <div className="cartHeader">
          <span className='headerImg'>IMG</span>
          <span className='headerTitle'>title</span>
          <span className='headerBrand'>brand</span>
          <span className='headerCategory'>categ</span>
          <span className='headerPrice'>precio</span>
          <span className='headerQty'>cant</span>
          <span className='headerTotal'>total</span>
      </div>

      {
        cart.map(item =>{
          return(
            <div className="singleCartItem">
              <div className="cartItemImg">
                <img src={`${item.img}`} alt="cartItemImg" />
              </div>
              <div className="cartItemInfo">
                <span className='cartTitle'>{item.title}</span>
                <span className='cartBrand'>{item.brand}</span>
                <span className='cartCategory'>{item.categ}</span>
                <span className='cartPrice'>{item.price}</span>
                <span className='cartQty'>?</span>
                <span className='cartTotal'>?</span>
                <span className='cartDeleteBtn'><i class="fa-solid fa-trash"></i></span>
              </div>
          </div>
          )
        })
      }


    </div>
  )
}

export default CartContainer