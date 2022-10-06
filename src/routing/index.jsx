import React from 'react';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer';
import{BrowserRouter,Routes, Route}from 'react-router-dom'
import NotFound from '../components/NotFound';
import CartContainer from '../containers/CartContainer';
// import automaticalySaveProds from './services/saveProducts';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase/config';

const Routing = () => {

    const [categories, setCategories]= useState([]);

    useEffect(()=>{
        /* getCategories desde fakestore API*/
        /*const getCategories = async()=>{
        try {
            const response = await fetch("https://fakestoreapi.com/products/categories/");
            const categ = await response.json();
            setCategories(categ);
        } catch (error) {
            console.log(error);
        }
        }
      */

        /* getCategories desde firebase*/
        const getCategories= async()=>{ 
            const querySnapshot = await getDocs(collection(db, "categories"));
            const firebaseCateg =[]
            querySnapshot.forEach((doc) => {
            firebaseCateg.push({id: doc.id, ...doc.data()});
            });
            setCategories(firebaseCateg);
        };
        // automaticalySaveProds();
        getCategories();
        },[])

    return (
    <BrowserRouter>
        <NavBar categories={categories} />
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
            <Route path='/detail/:productID' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Routing