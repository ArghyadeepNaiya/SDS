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
            <input type='submit' placeholder='Submit'></input>
        </form>
        <footer id='footer'>

            <ul id='copyright'>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </footer>

    </div>
  )
}

export default ContactText