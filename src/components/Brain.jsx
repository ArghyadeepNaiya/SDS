
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useMotion } from '@react-three/drei'
import { plane } from 'three/examples/jsm/Addons.js'
import { useMotionValue, useSpring } from 'motion/react'
import { useFrame } from '@react-three/fiber'

export function Brain(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/brain_hologram.glb')
  const { actions } = useAnimations(animations, group)
  useEffect (()=>{if(animations.length>0){
    actions[animations[0].name]?.play();
  }},[actions,animations])

  const yPosition =useMotionValue(5);
  const ySpring= useSpring(yPosition,{damping:50})
  useEffect(()=>{
    ySpring.set(0)
  },[ySpring])
  useFrame(()=>{
    group.current.position.y=ySpring.get()
  })
  return (
    <group ref={group} {...props} dispose={null}
    rotation={[Math.PI / 2, -0.2, 2.2]}
            scale={props.scale || 0.015}
            position={props.position || [1.5,2,0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="07e8ba9162674e488df6dd56fc54b2e3fbx"
            >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Icosphere001" rotation={[-Math.PI / 2, 0, -2.734]} scale={100}>
                  <mesh
                    name="Icosphere001_Particle_2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_2_0.geometry}
                    material={materials.Particle_2}
                  />
                  <mesh
                    name="Icosphere001_Particle_2_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_2_0_1.geometry}
                    material={materials.Particle_2}
                  />
                  <mesh
                    name="Icosphere001_Particle_2_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_2_0_2.geometry}
                    material={materials.Particle_2}
                  />
                  <mesh
                    name="Icosphere001_Particle_1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_1_0.geometry}
                    material={materials.Particle_1}
                  />
                  <mesh
                    name="Icosphere001_Particle_1_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_1_0_1.geometry}
                    material={materials.Particle_1}
                  />
                  <mesh
                    name="Icosphere001_Particle_1_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_1_0_2.geometry}
                    material={materials.Particle_1}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/brain_hologram.glb')