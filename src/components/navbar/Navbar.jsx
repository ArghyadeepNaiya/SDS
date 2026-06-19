import React, { useState } from 'react'
import './navbar.css'
import menuImg from '../../assets/menu.svg'
import closeImg from '../../assets/close.svg'

const Navbar = () => {
    const [toggle,setToggle]=useState(false)
  return (
    <div id="navbar">
        <h2 id='title'>SDS</h2>
        <ul id="links">
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About Us</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        <button onClick={()=>{setToggle(!toggle)}}
        id='toggle'>
            <img src={!toggle?menuImg:closeImg} alt=''/>
        </button>
    </div>
  )
}

export default Navbar