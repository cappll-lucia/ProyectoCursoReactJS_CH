import { useEffect, useState } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';

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
    <div>
      <NavBar categories={categories} />
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
