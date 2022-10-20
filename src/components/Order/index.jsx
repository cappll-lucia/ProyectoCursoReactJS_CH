import React, { useContext } from 'react'
import {Shop} from '../../context/ShopProvider';
import '../Order/styles.scss';

const Order = () => {


  const {cart, client, getTotal} =useContext(Shop);

  console.log(cart);

  return (
    <div className='Order'>
      <div className='orderContent'>
      {cart.map(item =>{
            return(
              <div className="singleItem" key={item.id}>
                <div className="ItemImg">
                  <img src={`${item.img}`} alt="ItemImg" />
                </div>
                <div className="ItemInfo">
                  <span className='ItemTitle'>Producto: {item.title}</span>
                  <span className='ItemBrand'>Marca: {item.brand}</span>
                  {/* <span className='ItemCategory'>{item.categ}</span> */}
                  <span className='ItemPrice'>Precio: {item.price}</span>
                  <span className='ItemQty'>Cantidad: {item.quantity}</span>
                  <span className='ItemTotal'>Total: {item.price*item.quantity}</span>
                </div>
            </div>
            )
          }) }
      </div>
      <div className="ClientInfo">
        <span>Cliente: {client.surname}, {client.name}</span>
        <span>Email: {client.email}</span>
        <span>Telefono: {client.phone }</span>
        <div className="actionPanelOrder">
        <button onClick={{}} className='btnConfirmOrder'>ConfirmarOrden</button>
        <button onClick={{}} className='btnCancelOrder'>Cancelar compra</button>
        </div>
      </div>
    </div>
  )
}

export default Order