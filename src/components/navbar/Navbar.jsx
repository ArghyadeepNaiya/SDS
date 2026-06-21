import React, { useState } from 'react'
import { Link } from 'react-router'
import './navbar.css'
import menuImg from '../../assets/menu.svg'
import closeImg from '../../assets/close.svg'
import logo from '../../assets/twinPeaks-removebg-preview.png'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    
  return (
    <div id="navbar">
        <div id='logo'>
            <img src={logo} height="60px" width="60px"></img>
            <h2 id='title'>SDS</h2>
        </div>
        
        
        
        <ul id="links" className={toggle ? "active" : ""}>
            <li><Link to='/'>Home</Link></li>
            <li><a href='#about'>About Us</a></li>
            <li><Link to='/resources'>Resources</Link></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        
        <button onClick={() => setToggle(!toggle)} id='toggle'>
            
            <img src={toggle ? closeImg : menuImg} alt='Menu' width="28" height="28"/>
        </button>
    </div>
  )
}

export default Navbar