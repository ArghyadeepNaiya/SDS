import React from 'react'
import './contacttext.css'
import gitIcon from '../../assets/icons/github.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import instaIcon from '../../assets/icons/instagram.svg'
import {motion} from 'motion/react'

const ContactText = () => {
  return (
    <div id='container'>
        <h1 className='text-amber-400 text-4xl' id='title'>
            Contact Us
        </h1>
        <form className='text-white' id='info'>
            
            <input type='text' className='text-white' placeholder='Your Name' required></input>
            <input type='email' className='text-white' placeholder='E-mail'></input>
            <textarea type='textbox' className='text-white' placeholder='More information'></textarea>
            <button type='submit' id='submit'>Submit</button>
        </form>
        <footer id='footer'>

            
            <ul id='icons' className='text-neutral-400'>
                <li><a><motion.img src={gitIcon} width="20" height="20" id='icon'
                style={{background:"#a1a1a1"}}
                whileHover={{background:"rgb(218,171,0)"}}
                transition={{ease:"circIn",duration:0.1}}
                ></motion.img></a></li>
                <li><a><motion.img src={linkedinIcon} width="20" height="20" id='icon' 
                style={{background:"#a1a1a1"}}
                whileHover={{background:"rgb(218,171,0)"}}
                transition={{ease:"circIn",duration:0.1}}></motion.img></a></li>
                <li><a><motion.img src={instaIcon} width="20" height="20" id='icon' 
                style={{background:"#a1a1a1"}}
                whileHover={{background:"rgb(218,171,0)"}}
                transition={{ease:"circIn",duration:0.1}}></motion.img></a></li>
            </ul>
            <ul id='copyright'>
                <li className='text-neutral-400 text-2xl'>&copy;</li>
                <li className='text-neutral-400 text-1xl'>2026</li>
                <li className='text-neutral-400 text-1xl'>All rights reserved</li>
            </ul>
            <ul id='legal'>
                <li><motion.a className='text-1xl text-neutral-400'
                style={{color:"#a1a1a1"}}
                whileHover={{color:"rgb(218,171,0)"}}
                transition={{ease:"circIn",duration:0.1}}>Privacy</motion.a></li>
                <li><motion.a className='text-1xl text-neutral-400'
                style={{color:"#a1a1a1"}}
                whileHover={{color:"rgb(218,171,0)"}}
                transition={{ease:"circIn",duration:0.1}}>Terms of Use</motion.a></li>
            </ul>
        </footer>
    </div>
  )
}

export default ContactText