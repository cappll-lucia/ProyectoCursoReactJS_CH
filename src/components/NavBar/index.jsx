import React from 'react'
import CartWidget from '../CartWidget'
import './styles.scss'

const NavBar = ({categories}) => {
  return (
    <div className="topnav " id="myTopnav">
      <a href="#">{categories[0]}</a>
      <a href="#">{categories[1]}</a>
      <a href="#">{categories[2]}</a>
      <a href="#">{categories[3]}</a>
      <CartWidget quantity={0}/>
    </div>
  )
}

export default NavBar