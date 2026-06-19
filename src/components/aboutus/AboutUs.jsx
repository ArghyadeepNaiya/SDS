import React from 'react'
import AboutUsText from './AboutUsText'
import './aboutus.css'
import {backOut, motion} from 'motion/react'
const AboutUs = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full py-20'>
            <motion.h1 className='flex justify-center
             text-6xl text-white'
             initial={{opacity:0,y:0,backgroundColor:"none",}}
             whileInView={{opacity:1,y:0,backgroundColor:"rgb(218,171,0)",color:"rgb(0,0,0)"}}
             transition={{ease:"backout",duration:1.5}} id='about'>
                About Us
            </motion.h1>
            <AboutUsText normal={"Society for Data Science is BIT Mesra's first student-run, not-for-profit organization focused on data science and its interdisciplinary applications."}
                mask={"Since our founding in 2019, we have united students from a wide range of disciplines behind our shared passion for all things data. Our mission is to foster a strong data science community on campus. Each semester, we focus on: developing educational learning experiences like our technical workshops and decal course to expand data science education on campus, hosting professional events for students to connect with industry leaders and grow their network, and conducting analytics consulting projects to help members gain experience and make an impact. Our program provides over a hundred students each semester with mentorship and data science skills through working in teams on a tangible group project. We aim to build an inclusive and accessible community where students of all levels and backgrounds can dive into the world of data science."}>

            </AboutUsText>
            <AboutUsText normal={"We have everything you need to launch and to grow your academic environment."}
            mask={"The Society for Data Science is a non-profit society of data science enthusiasts that serves our members, improving the data science profession, eliminating bias and enhancing diversity, and advancing ethical data science throughout the world."}
            >

            </AboutUsText>
        </div>
    )
}

export default AboutUs