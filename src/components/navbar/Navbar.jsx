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
        <Link to='/' id='logo'>
            <img src={logo} height="80px" width="80px"></img>
            <h2 className='text-3xl' id='title'>SDS</h2>
        </Link>
        
        
        
        <ul id="links" className={toggle ? "active" : ""}>
            {/* <li><Link to='/'>Home</Link></li> */}
            <li><Link to='/#about'>About Us</Link></li>
            <li><Link to='/resources'>Resources</Link></li>
            <li><Link to='/#contact'>Contact</Link></li>
        </ul>
        
        <button onClick={() => setToggle(!toggle)} id='toggle'>
            
            <img src={toggle ? closeImg : menuImg} alt='Menu' width="28" height="28"/>
        </button>
    </div>
  )
}

export default Navbar