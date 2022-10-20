import React, { useContext, useState } from 'react'
import {Shop} from '../../context/ShopProvider';
import '../Order/styles.scss';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import LoaderSqr from '../LoaderSqr';
import {db} from '../../firebase/config';
import newOrder from '../../services/newOrder';
import {collection, addDoc, doc, updateDoc} from 'firebase/firestore';


const Order = () => {

  const [loading, setLoading] = useState(false);
  const [orderID, setOrderID] = useState(0);

  const {cart, clearCart, getTotal, setClient,client} =useContext(Shop);
  const navigate = useNavigate();
  const Total= getTotal();

  const updateStock=async(id, newStock)=>{
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, {
      stock: newStock
    });
  }

  const handleCancelOrder=()=>{
    clearCart();
    setClient(null);
    alert("Productos eliminados");
    navigate('/');
  }

  const handleConfirmOrder=async()=>{
    setLoading(true);
    console.log(cart);
    const order= newOrder(client.email, client.name, client.surname, client.phone, cart, Total);
    console.log(order);
    console.log(order.items);
    //saving order to firebase
    const docRef = await addDoc(collection(db, 'orders'), order);
    setOrderID(docRef._key.path.segments[1]);
    setLoading(false);
    //updating product´s stock in firebase
    cart.forEach(item => {
    updateStock(item.id, item.stock-item.quantity);
    });
  }

  const finish = ()=>{
    clearCart();
    setClient(null);
    navigate('/');
  }


  return (
    !loading 
    ?
    <div className='Order'>
      <div className='orderContent'>
      {cart.map(item =>{
            return(
              <div className="singleItem" key={item.id}>
                <div className="ItemImg">
                  <img src={`${item.img}`} alt="ItemImg" />
                </div>
                <div className="ItemInfo">
                  <span className='ItemTitle'>Producto:  {item.title}</span>
                  <span className='ItemBrand'>Marca:  {item.brand}</span>
                  {/* <span className='ItemCategory'>{item.categ}</span> */}
                  <span className='ItemPrice'>Precio:  {item.price}</span>
                  <span className='ItemQty'>Cantidad:  {item.quantity}</span>
                  <span className='ItemTotal'>Total:  ${item.price*item.quantity}</span>
                </div>
            </div>
            )
          }) }
        </div>
      <div className="ClientInfo">
        <span>Cliente: {client.surname}, {client.name}</span>
        <span>Email: {client.email}</span>
        <span>Telefono: {client.phone }</span>
        <span style={{'backgroundColor':'#77c259e3', 'fontSize':'20px'}}>Importe final orden: $ {Total}</span>
        {
          orderID==0 
          ?
          <div className="actionPanelOrder">
            <button onClick={handleConfirmOrder} className='btnConfirmOrder'>Confirmar Orden</button>
            <button onClick={handleCancelOrder} className='btnCancelOrder'>Cancelar compra</button>
          </div>
          :
          <div className='orderID'>
            <h3>ID de su orden: {orderID}</h3>
            <button onClick={finish} className='btnConfirmOrder'>Volver al incicio</button>

          </div>
      }
        
        
        

      </div>
    </div>
  :
  <LoaderSqr messaje={"Procesando su orden... Aguarde un momento."}/>
  )
}

export default Order