import React from 'react'
import './contacttext.css'

const ContactText = () => {
  return (
    <div id='container'>
        <h1 className='text-amber-400 text-5xl' id='title'>
            Contact Us
        </h1>
        <form className='text-white' id='info'>
            
            <input type='textbox' className='text-white' placeholder='Your Name'></input>
            <input type='textbox' className='text-white' placeholder='E-mail'></input>
            <input type='textbox' className='text-white' placeholder='More information'></input>
            <input type='submit' placeholder='Submit' className='bg-amber-400 text-black text-2xl font-medium'></input>
        </form>
        <footer id='footer'>

            
            <ul id='icons'>
                <li><img></img></li>
                <li><img></img></li>
                <li><img></img></li>
            </ul>
            <ul id='copyright'>
                <li className='text-neutral-400 text-2xl'>&copy;</li>
                <li className='text-neutral-400 text-1xl'>2026</li>
                <li className='text-neutral-400 text-1xl'>All rights reserved</li>
            </ul>
            <ul id='legal'>
                <li><a className='text-1xl text-neutral-400'>Privacy</a></li>
                <li><a className='text-1xl text-neutral-400'>Terms of Use</a></li>
            </ul>
        </footer>
    </div>
  )
}

export default ContactText