import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {Shop} from '../../context/ShopProvider';
// import'../../../public/gallery/'
import './styles.scss';
import {BsFillTrashFill} from 'react-icons/bs';


const CartContainer = () => {

  const {cart, removeItem, clearCart} =useContext(Shop);
console.log( cart);
  return (
    <div className="cartContainer">
      <div className='cart'>
        <div className="cartHeader">
            <span className='headerImg'>IMG</span>
            <span className='headerTitle'>title</span>
            <span className='headerBrand'>brand</span>
            {/* <span className='headerCategory'>categ</span> */}
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
                  <span className='cartItemTitle'>{item.title}</span>
                  <span className='cartItemBrand'>{item.brand}</span>
                  {/* <span className='cartItemCategory'>{item.categ}</span> */}
                  <span className='cartItemPrice'>{item.price}</span>
                  <span className='cartItemQty'>{item.quantity}</span>
                  <span className='cartItemTotal'>{item.price*item.quantity}</span>
                  <span onClick={()=>removeItem(item.id)} className='cartItemDeleteBtn'><BsFillTrashFill/></span>
                </div>
            </div>
            )
          })
        }
      </div>
      <div className="totalCart">
      <button onClick={()=>clearCart()} className='clearCartBtn'>Vaciar Carrito<BsFillTrashFill/></button>
      </div>
    </div>
  )
}

export default CartContainer