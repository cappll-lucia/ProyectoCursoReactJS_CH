import React, { useState } from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.scss';
import { products } from '../../data/products';
import { useEffect } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  
  const [products, setProducts]=useState([]);

  const {categoryID}=useParams();

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
        const response = await fetch('https://fakestoreapi.com/products');
        const prods = await response.json();
        console.log("PRODS: ",prods);
        if (categoryID){
          let categoryProds = prods.filter(prod=> prod.category==categoryID);
          setProducts(categoryProds);
        }else{
          setProducts(prods);
        }
        console.log(products);
      } catch (error) {
        console.log(error);
      }
  }
  getProducts();
  }, [categoryID]);
  
  
  return (
    
    <div className='ILC container-fluid'>
        {/* <h1>SitioWeb en construcción...</h1> */}
        {/* <ItemCount/> */}

        <ItemList products={products}/>

    </div>
    
  )
}

export default ItemListContainer