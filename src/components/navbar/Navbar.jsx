import React, { useState } from 'react'
import './navbar.css'
import menuImg from '../../assets/menu.svg'
import closeImg from '../../assets/close.svg'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    
  return (
    <div id="navbar">
        <h2 id='title'>SDS</h2>
        
        {/* We add an 'active' class when toggle is true */}
        <ul id="links" className={toggle ? "active" : ""}>
            <li><a href='#hero'>Home</a></li>
            <li><a href='#about'>About Us</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        
        <button onClick={() => setToggle(!toggle)} id='toggle'>
            {/* Swap between menu and close icons */}
            <img src={toggle ? closeImg : menuImg} alt='Menu' width="28" height="28"/>
        </button>
    </div>
  )
}

export default Navbar