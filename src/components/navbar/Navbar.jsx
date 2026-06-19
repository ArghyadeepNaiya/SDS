import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div id="navbar">
        <h2>SDS</h2>
        <ul id="links">
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar