import React from 'react';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer';
import{BrowserRouter,Routes, Route, Navigate}from 'react-router-dom'
import CartContainer from '../containers/CartContainer';
import CheckoutContainer from '../containers/CheckoutContainer';
// import automaticalySaveProds from '../services/saveProducts';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase/config';
import LoaderSqr from '../components/LoaderSqr';

const Routing = () => {

    const [categories, setCategories]= useState([]);

    useEffect(()=>{
        // getCategories from firebase
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
            <Route path='/checkout' element={<CheckoutContainer/>}/>
            <Route path='*' element={<LoaderSqr messaje={'Ups! Pagina no encontrada'} messaje2={'Volver al inicio'} btnAction={()=>{Navigate('/');}}/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Routing