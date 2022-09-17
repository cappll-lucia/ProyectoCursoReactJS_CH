import React, { useState } from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.scss';
import { products } from '../../data/products';
import { useEffect } from 'react';
import ItemList from '../../components/ItemList';


const ItemListContainer = () => {
  
  const [products, setProducs]=useState([]);

/* --Trajendo los productosd dese Data.json
  useEffect(()=>{
    (async()=>{
      const getProducts = new Promise((accept, reject)=>{
        setTimeout(() => {
          accept(products)
          console.log(accept);
        }, 2000);
      })

    try {
        const products = await getProducts;
        setProducsState(products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])
  */

  /* Trayendo los productos desde FakeStoreAPI */
  useEffect (()=>{
    const getProducts  =async()=>{
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducs(data);
      } catch (error) {
        console.log(error);
      }
    }
    
  getProducts();
  console.log(products)
  }, []);
  
  
  return (
    
    <div className='ILC container-fluid'>
        {/* <h1>SitioWeb en construcción...</h1> */}
        {/* <ItemCount/> */}

        <ItemList products={products}/>

    </div>
    
  )
}

export default ItemListContainer