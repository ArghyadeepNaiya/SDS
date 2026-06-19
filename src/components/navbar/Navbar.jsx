import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div id="navbar">
        <h2>SDS</h2>
        <ul id="links">
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About Us</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar