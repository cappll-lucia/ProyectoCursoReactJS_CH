import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './styles.scss';


const NavBar = ({categories}) => {

  return (
    <div className="topnav " id="myTopnav">
      <Link to='/'><img src="../public/gallery/logotipoOptica.png"/></Link>
      {
        categories.length ?
          categories.map(categ =>{
            return <Link to={`/category/${categ.name}`} key={categ.id}>{categ.name}</Link>
          }): 
          <span>Bienvenido a nuestro sitio web!</span>
      }
      <CartWidget quantity={0}/>
    </div>
  )
}

export default NavBar