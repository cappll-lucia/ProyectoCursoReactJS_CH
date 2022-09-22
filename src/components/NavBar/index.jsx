import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './styles.scss';

const NavBar = ({categories}) => {
  return (
    <div className="topnav " id="myTopnav">
      <Link to='/'><img src='/public/gallery/logotipoOptica.png'/></Link>
      <Link to='/category/electronics'>{categories[0]}</Link>
      <Link to="/category/jewelery">{categories[1]}</Link>
      <Link to="/category/men's clothing">{categories[2]}</Link>
      <Link to="/category/women's clothing">{categories[3]}</Link>
      <CartWidget quantity={0}/>
    </div>
  )
}

export default NavBar