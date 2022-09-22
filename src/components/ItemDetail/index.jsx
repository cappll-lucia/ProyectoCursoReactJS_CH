import React from 'react';
import ItemCount from '../ItemCount';
import './styles.scss';

const ItemDetail = ({product}) => {
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
          <ItemCount/>
        </div>  
      </div>
    </div>
  )
}

export default ItemDetail