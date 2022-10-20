import React, { useContext, useState} from 'react';
import {Shop} from '../../context/ShopProvider';
import { Link, useNavigate } from 'react-router-dom';

import './styles.scss';
import {BsFillTrashFill} from 'react-icons/bs';
import LoaderSqr from '../../components/LoaderSqr';


const CartContainer = () => {

  const {cart, removeItem, clearCart, getTotal} =useContext(Shop);

  let totalAcum = getTotal();

  const [loading, setLoading] = useState(false);

  const navigate=useNavigate();

  return (
    <div className="cartContainer">
      <div className='cartContent'>
        <div className="cartHeader">
            <span className='headerImg'>Imagen</span>
            <span className='headerTitle'>Producto</span>
            <span className='headerBrand'>Marca</span>
            <span className='headerPrice'>Precio</span>
            <span className='headerQty'>Cantidad</span>
            <span className='headerTotal'>Total</span>
        </div>

        {
          cart.length ?
          cart.map(item =>{
            return(
              <div className="singleCartItem" key={item.id}>
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
        :
        <div className='cartIsEmpty'>
          <span>No hay productos en el carrito!</span>
          <Link to='/'><button className='btnCartIsEmpty'>Ver productos</button></Link>
        </div>
        }
      </div>
      <h3v className="totalCart">Total: ${totalAcum}</h3v>
      {
      !loading ? 
      <div className="cartAction">
        <button onClick={()=>clearCart()} className='clearCartBtn'>Vaciar Carrito<BsFillTrashFill/></button>
        <button onClick={()=>{setLoading(true);navigate('/checkout');}} className='FinalizeCartBtn'>Finalizar</button>
      </div>
      :
      <LoaderSqr messaje="Generando su orden..." messaje2={''} />
      }
    </div>
  )
}

export default CartContainer