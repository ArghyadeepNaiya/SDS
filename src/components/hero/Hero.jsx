import React from 'react'
import Herotext from './Herotext'
import { Canvas, useFrame } from '@react-three/fiber'
import { Brain } from '../Brain'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'motion/react'
import { easing } from 'maath'
import { Float } from '@react-three/drei'


const Hero = () => {
    const isMobile=useMediaQuery({maxWidth:853})
  return (
    <div className="relative w-full h-screen">
        <Herotext>
        </Herotext>
        <figure className='absolute inset-0 -z-10' style={{
            width:"100vw", height:"100vh"
        }}>
            <Canvas camera={{position:[0,1,3]}}>
                <Float>
                    <Brain scale={isMobile && 0.015} 
                position={isMobile && [0,-1.2,0]}>

                </Brain>
                </Float>
                
                <Rig></Rig>
            </Canvas>
        </figure>
    </div>
  )
}
function Rig(){
    return useFrame((state,delta)=>{
        easing.damp3(state.camera.position,[
            state.mouse.x/10,
            1.2+state.mouse.y/10,
            3,
        ],0.2,delta)
    })
}

export default Hero