import React, { useContext, useState} from 'react';
// import { useParams } from 'react-router-dom';
import {Shop} from '../../context/ShopProvider';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import newOrder from '../../services/newOrder';
import {db} from '../../firebase/config';
import {collection, addDoc, doc, updateDoc} from 'firebase/firestore';

import './styles.scss';
import {BsFillTrashFill} from 'react-icons/bs';
import LoaderSqr from '../../components/LoaderSqr';


const CartContainer = () => {

  const {cart, removeItem, clearCart, getTotal} =useContext(Shop);

  const [loading, setLoading] = useState(false);

  const navigate=useNavigate();

  const updateStock=async(id, newStock)=>{
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, {
      stock: newStock
    });
  }

  // const handleSale=async()=>{
  //   setLoading(true);
  //   const totalAmount = getTotal();
  //   const order= newOrder('lucia@gmai.com', 'Lucia', 'capp', 3416555222,cart, totalAmount);
    
  //   //saving order to firebase
  //   const docRef = await addDoc(collection(db, 'orders'), order);
    
  //   //feedBack
  //   setLoading(false);
  //   // alert("Gracias por su compra! La orden ha sido generada. ");
    
  //   //updating product´s stock in firebase
  //   cart.forEach(item => {
  //     updateStock(item.id, item.stock-item.quantity);
  //   });
  // }


  return (
    <div className="cartContainer">
      <div className='cartContent'>
        <div className="cartHeader">
            <span className='headerImg'>Imagen</span>
            <span className='headerTitle'>Producto</span>
            <span className='headerBrand'>Marca</span>
            {/* <span className='headerCategory'>categ</span> */}
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
      {
      !loading ? 
      <div className="cartAction">
        <button variant="outlined" onClick={()=>clearCart()} className='clearCartBtn'>Vaciar Carrito<BsFillTrashFill/></button>
        <button variant="contained" onClick={()=>{navigate('/checkout')}} className='FinalizeCartBtn'>Finalizar</button>
      </div>
      :
      <LoaderSqr messaje="Generando su orden..." messaje2={''} />
      }
    </div>
  )
}

export default CartContainer