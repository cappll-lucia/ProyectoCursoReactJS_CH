import React from 'react';
import Item from '../Item';
import './styles.scss';

const ItemList = ({products}) => {
  return (
    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ItemList'>
        { products.length ?
              products.map(product=>{
              return <Item key={product.id} prod={product}/>
              }):
              <h2>Cargando productos...</h2>
        }
    </div>
  )
}

export default ItemList