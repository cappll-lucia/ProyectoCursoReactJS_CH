import { useEffect, useState } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import{
  BrowserRouter,
  Routes,
  Route
}from 'react-router-dom'
import NotFound from './components/NotFound';
import ShopProvider from './context/ShopProvider';
import CartContainer from './containers/CartContainer';

function App() {

  const [categories, setCategories]= useState([]);

  useEffect(()=>{
    const getCategories = async()=>{
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories/");
        const categ = await response.json();
        setCategories(categ);
      } catch (error) {
        console.log(error);
      }
    }

    getCategories();

  })

  return (
    <ShopProvider>
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
    </ShopProvider>
  );
}

export default App;
