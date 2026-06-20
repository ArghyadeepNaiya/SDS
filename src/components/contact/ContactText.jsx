import React from 'react'
import './contacttext.css'
import gitIcon from '../../assets/icons/github.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import instaIcon from '../../assets/icons/instagram.svg'
import {motion} from 'motion/react'

const ContactText = () => {
  return (<>
    <div id='container'>
        <div id='contact'>
            <a href=''>E-mail Us From here</a>
            <div id='socials'>
                <div id='address'></div>
                <div id='links'></div>
            </div>

        </div>
        
        <form className='text-white' id='info'>
            <motion.h1 className='text-amber-400 text-4xl' id='title'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ease:"circleOut",duration:1.5}}>
            Get In Touch
        </motion.h1>
            <div id='#info-box'>
                <label className='text-neutral-400' id='msg'>Enter Your Full Name</label>
                <input type='text' className='text-white' placeholder='Your Name' required></input>
            </div>
            
            <div id='#info-box'>
                <label className='text-neutral-400'>Enter Your Email Address</label>
                <input type='email' className='text-white' placeholder='E-mail'></input>
            </div>
            
            <div id='#info-box'>
                <label className='text-neutral-400'>Enter Your Message</label>
                <textarea type='textbox' className='text-white' placeholder='More information'></textarea>
            </div>
            
            <button type='submit' id='submit'>Submit</button>
        </form>
            </div>
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
        </>
  )
}

export default ContactText