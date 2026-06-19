import React, { useEffect, useState } from 'react'
import './aboutustext.css'
import {backOut, motion} from 'motion/react'


const AboutUsText = ({mask,normal}) => {
    //define cursor coordinate
    const [mousePosition,SetMousePosition]=useState({x:0,y:0})
    const containerRef = React.useRef(null);

    //define if mouse is hovered on element
    const [isHovered,setIsHovered]=useState(false)

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        SetMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const size = isHovered ? '650' : '100';

  return (
    <div className="container" ref={containerRef} onMouseMove={handleMouseMove}>
        
        <motion.div className='normal'>
            <motion.h1
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:0.5}}>
                {normal}
            </motion.h1>
        </motion.div>
        <motion.div className='mask'
        animate={{webkitMaskPosition:`${mousePosition.x-size/2}px ${mousePosition.y-size/2}px`,
            webkitMaskSize:`${size}px`,
        }}
        transition={{ease:"backOut",duration:0.4}}>
            <motion.h1
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:0.8}}
             onMouseEnter={()=>setIsHovered(true)}
             onMouseLeave={()=>setIsHovered(false)}
             >
                {mask}
            </motion.h1>
        </motion.div>
        
    </div>
  )
}

export default AboutUsText