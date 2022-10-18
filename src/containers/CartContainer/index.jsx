import React, { useContext, useState} from 'react';
// import { useParams } from 'react-router-dom';
import {Shop} from '../../context/ShopProvider';
import { Link } from 'react-router-dom';
import newOrder from '../../services/newOrder';
import {db} from '../../firebase/config';
import {collection, addDoc, doc, updateDoc} from 'firebase/firestore';

import './styles.scss';
import {BsFillTrashFill} from 'react-icons/bs';
import Button from '@mui/material/Button';
import LoaderSqr from '../../components/LoaderSqr';


const CartContainer = () => {

  const {cart, removeItem, clearCart, getTotal} =useContext(Shop);

  const [loading, setLoading] = useState(false);

  const updateStock=async(id, newStock)=>{
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, {
      stock: newStock
    });
  }

  const handleSale=async()=>{
    setLoading(true);
    const totalAmount = getTotal();
    const order= newOrder('lucia@gmai.com', 'Lucia', 'capp', 3416555222,cart, totalAmount);
    
    //saving order to firebase
    const docRef = await addDoc(collection(db, 'orders'), order);
    
    //feedBack
    setLoading(false);
    alert("Gracias por su compra! La orden ha sido generada. "); //Esto tiene que quedar con sweet alert
    
    //updating product´s stock in firebase
    cart.forEach(item => {
      updateStock(item.id, item.stock-item.quantity);
    });
  }


  return (
    <div className="cartContainer">
      <div className='cartContent'>
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
        <Button variant="outlined" onClick={()=>clearCart()} className='clearCartBtn'>Vaciar Carrito<BsFillTrashFill/></Button>
        <Button variant="contained" onClick={()=>handleSale()} className='FinalizeCartBtn'>Finalizar</Button>
      </div>
      :
      <LoaderSqr messaje="Aguarde un Momento" />
      }
    </div>
  )
}

export default CartContainer