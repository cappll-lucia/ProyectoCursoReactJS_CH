import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';
import ItemCount from '../ItemCount';
import './styles.scss';

const ItemDetail = ({product}) => {

  const [qty, setQty]= useState(0);
  const navigate=useNavigate();


  const {addItem}=useContext(Shop);

  const addCart=(quantity)=>{
    setQty(quantity);
  }

  const handleFinish=()=>{
    const productLine = {...product, quantity:qty};
    addItem(productLine);
    navigate('/cart');
  }

  return (
    <div className='ItemDetail'>
      <div className="ItemDetailContent">
        <div className="ItemDetailImg">
          <img src={product.image} alt='img-detail'/>
        </div>
        <div className='ItemDetailInfo'>
          <h3 className='ItemDetailTitle'>{product.title}</h3>
          <span className='ItemDetailDesc'>${product.description}</span>
          <span className='ItemDetailPrice'>$ {product.price}</span>
          { qty ? <button onClick={handleFinish}>Finalizar compra</button> :<ItemCount stock={5} initial={1} onAdd={addCart}/> }
        </div> 
      </div>
    </div>
  )
}

export default ItemDetail