import { FlipWords } from '../FlipWords'
import { motion, scale } from 'motion/react'
import './herotext.css'
import React from 'react'


const Herotext = () => {
    const words=["Create.","Innovate.","Inspire."]
  return (
    <div>
        <motion.div id='welcomeMsg'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.2}}>
            <motion.h1 className='text-7xl 
            text-white' 
            initial={{opacity:0,y:-20}}
            animate={{opacity:1,y:0,}}
            transition={{delay:0.3}}>
            Welcome to <br>
            </br>Society for <br>
            </br> Data Science.
            
        </motion.h1>
        <motion.h1 className='text-white text-7xl'
        initial={{opacity:0,y:-20,}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.6}}
        >
                We <FlipWords words={words}></FlipWords>
            </motion.h1>
        </motion.div>
    </div>
  )
}

export default Herotext