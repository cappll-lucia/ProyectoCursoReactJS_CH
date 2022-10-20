import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './styles.scss';
import logoImage from './logotipoOptica.png';



const NavBar = ({categories}) => {

  return (
    <>
  <div className="topHeader" id="myTopHeader">
    <Link to='/'><img src={logoImage}/></Link>
    <Link to='/cart'><CartWidget/></Link>
  </div>

    <div className="topnav " id="myTopnav">
      {
        categories.length ?
          categories.map(categ =>{
            return <Link  className='NavBarCateg' to={`/category/${categ.name}`} key={categ.id}>{categ.name}</Link>
          }): 
          <span>Bienvenido a nuestro sitio web!</span>
      }
    </div>
    </>
  )
}

export default NavBar