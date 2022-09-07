import React from 'react'
import CartWidget from '../CartWidget'
import './styles.scss'

const NavBar = ({categories}) => {
  return (
    <div className="topnav " id="myTopnav">
      <a href="../public/index.html">{categories[0]}</a>
      <a href="../public/index.html">{categories[1]}</a>
      <a href="../public/index.html">{categories[2]}</a>
      <a href="../public/index.html">{categories[3]}</a>
      <CartWidget quantity={0}/>
    </div>
  )
}

export default NavBar