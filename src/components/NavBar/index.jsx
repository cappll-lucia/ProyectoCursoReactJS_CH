import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './styles.scss';
import logoImage from './logotipoOptica.png';
import SearchBar from '../SearchBar';


const NavBar = ({categories}) => {

  return (
    <>
  <div className="topHeader" id="myTopHeader">
    <SearchBar/>
    <Link to='/'><img src={logoImage}/></Link>
    <Link to='/cart'><CartWidget quantity={0}/></Link>
  </div>

    <div className="topnav " id="myTopnav">
      {
        categories.length ?
          categories.map(categ =>{
            return <Link to={`/category/${categ.name}`} key={categ.id}>{categ.name}</Link>
          }): 
          <span>Bienvenido a nuestro sitio web!</span>
      }
    </div>
    </>
  )
}

export default NavBar