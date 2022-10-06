import React, { useState } from 'react';
import './styles.scss';
import { useEffect } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import {db} from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";


const ItemListContainer = () => {

  const [products, setProducts]=useState([]);

  const {categoryID}=useParams();

  /*Trayendo los productos desde FireBase*/
  useEffect (()=>{
    const getProducts  =async()=>{
      try {
        let q ='';
        if(categoryID){
          q = query(collection(db, "products"),where("category", "==", categoryID));
        }else{
          q = query(collection(db, "products"));
        }
        const querySnapshot = await getDocs(q);
        const firebaseProds=[];
        querySnapshot.forEach((doc) => {
          firebaseProds.push({id: doc.id, 
                              ...doc.data()});
        });
        setProducts(firebaseProds); 
      } catch (error) {
        console.log(error);
      }
  }
  getProducts();
  }, [categoryID]);



  /* --Trajendo los productosd dese Data.json
  useEffect(()=>{
    (async()=>{
      const getProducts = new Promise((accept, reject)=>{
        setTimeout(() => {
          accept(products)
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
  /*
  useEffect (()=>{
    const getProducts  =async()=>{
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const prods = await response.json();
        if (categoryID){
          let categoryProds = prods.filter(prod=> prod.category==categoryID);
          setProducts(categoryProds);
        }else{
          setProducts(prods);
        }
      } catch (error) {
        console.log(error);
      }
  }
  getProducts();
  }, [categoryID]);
  */


  
  return (
    
    <div className='ILC container-fluid'>
        {/* <h1>SitioWeb en construcción...</h1> */}
        {/* <ItemCount/> */}

        <ItemList products={products}/>

    </div>
    
  )
}

export default ItemListContainer