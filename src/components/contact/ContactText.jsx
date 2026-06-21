import React from 'react'
import './contacttext.css'
import gitIcon from '../../assets/icons/github.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import instaIcon from '../../assets/icons/instagram.svg'
import {motion} from 'motion/react'
import { useState } from 'react';
import {mailKey} from '../../../key.js'


const ContactText = () => {
   

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", mailKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (<>
    <div id='container'>
            <div id='socials'>
                <div id='address'>
                    <motion.h1 className='mb-5 h-20 text-4xl text-amber-400 text-left'
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{ease:"circleOut",duration:1.5}}>
                        Where to find us</motion.h1>
                    <p className='text-3xl text-neutral-400 text-left'>
                        Birla Institute of Technology,<br/>
                        Mesra Ranchi, JH <br/>
                        835215, India 
                    </p>
                    
                </div>
                <div id='c-links'>
                    <motion.h1 className='mb-5 h-20 text-4xl text-amber-400'
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{ease:"circleOut",duration:1.5}}>Follow Us</motion.h1>
                    <div
                    id='c-link'>
                        <div id='inner-link'>
                            <img src={gitIcon} height="25px" width="40px"></img><motion.a 
                            href='https://github.com/SDS-Society-for-Data-Science-BIT-Mesra'
                            className='text-2xl text-neutral-400'
                            style={{color:"#a1a1a1"}}
                            whileHover={{color:"rgb(218,171,0)"}}
                            transition={{ease:"circIn",duration:0.1}}>GitHub</motion.a>
                        </div>
                        
                        <div id='inner-link'>
                            <img src={linkedinIcon} height="25px" width="40px"></img><motion.a 
                            href='https://in.linkedin.com/company/society-for-data-science-bit-mesra'
                            className='text-2xl text-neutral-400'
                            style={{color:"#a1a1a1"}}
                            whileHover={{color:"rgb(218,171,0)"}}
                            transition={{ease:"circIn",duration:0.1}}>LinkedIn</motion.a>
                        </div>

                        <div id='inner-link'>
                            <img src={instaIcon} height="25px" width="35px"></img><motion.a 
                            href='https://www.instagram.com/sds.bitm/'
                            className='text-2xl text-neutral-400'
                            style={{color:"#a1a1a1"}}
                            whileHover={{color:"rgb(218,171,0)"}}
                            transition={{ease:"circIn",duration:0.1}}>Instagram</motion.a>
                        </div>
                        
                        
                    </div>
                </div>

        </div>
        
        <form className='text-white' id='info' onSubmit={onSubmit}>
            <motion.h1 className='text-amber-400 text-4xl' id='title'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ease:"circleOut",duration:1.5}}>
            Get In Touch
        </motion.h1>
            <div id='#info-box'>
                <label className='text-neutral-400' id='msg'>Enter Your Full Name</label>
                <input type='text' className='text-white' placeholder='Your Name' name='name' required></input>
            </div>
            
            <div id='#info-box'>
                <label className='text-neutral-400'>Enter Your Email Address</label>
                <input type='email' className='text-white' name='email' placeholder='E-mail' required></input>
            </div>
            
            <div id='#info-box'>
                <label className='text-neutral-400'>Enter Your Message</label>
                <textarea type='textbox' className='text-white' placeholder='More information' name='message'></textarea>
            </div>
            
            <button type='submit' id='submit'>Submit</button>
        </form>
            </div>
        <footer id='footer'>

            
            <ul id='icons' className='text-neutral-400'>
                <li><a href='https://github.com/SDS-Society-for-Data-Science-BIT-Mesra'>
                <motion.img src={gitIcon} width="20" height="20" id='icon'
                style={{background:"#a1a1a1"}}
                whileHover={{background:"rgb(218,171,0)"}}
                transition={{ease:"circIn",duration:0.1}}
                ></motion.img></a></li>
                <li><a href='https://in.linkedin.com/company/society-for-data-science-bit-mesra'>
                <motion.img src={linkedinIcon} width="20" height="20" id='icon' 
                style={{background:"#a1a1a1"}}
                whileHover={{background:"rgb(218,171,0)"}}
                transition={{ease:"circIn",duration:0.1}}></motion.img></a></li>
                <li><a href='https://www.instagram.com/sds.bitm/'>
                <motion.img src={instaIcon} width="20" height="20" id='icon' 
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