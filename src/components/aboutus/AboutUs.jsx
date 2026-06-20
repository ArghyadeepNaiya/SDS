import React from 'react'
import AboutUsText from './AboutUsText'
import './aboutus.css'
import {backOut, motion} from 'motion/react'
const AboutUs = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full py-20'>
            <motion.h1 className='flex justify-center
             text-4xl text-white'
             initial={{opacity:0,y:40,backgroundColor:"none",}}
             whileInView={{opacity:1,y:0,backgroundColor:"rgb(218,171,0)",color:"rgb(0,0,0)"}}
             transition={{ease:"backout",duration:1}} id='about'>
                About Us
            </motion.h1>
            <AboutUsText normal={"Society for Data Science is BIT Mesra's first student-run, not-for-profit organization focused on data science and its interdisciplinary applications."}
                mask={"Since our founding in 2019, we have united students from a wide range of disciplines behind our shared passion for all things data. Our mission is to foster a strong data science community on campus. Each semester, we focus on: developing educational learning experiences like our technical workshops and decal course to expand data science education on campus, hosting professional events for students to connect with industry leaders and grow their network, and conducting analytics consulting projects to help members gain experience and make an impact. Our program provides over a hundred students each semester with mentorship and data science skills through working in teams on a tangible group project. We aim to build an inclusive and accessible community where students of all levels and backgrounds can dive into the world of data science."}>

            </AboutUsText>
            <div id='container'>
                <div id='insider'>
                    <h3>
                        Define
                    </h3>
                    <p>
                        Data science is a "concept to unify statistics, data <br></br>
                        analysis, machine learning and their related methods" in <br></br>
                         order to "understand and analyze actual phenomena" with data. <br></br>
                          It employs techniques and theories drawn from many fields within <br></br>
                           the context of mathematics, statistics, computer science, and <br></br>
                            information science. 
                    </p>
                </div>
                <div id='insider'>
                    <h3>
                        Build
                    </h3>
                    <p>
                        You are going to need more than technical knowledge <br></br>
                         to succeed as a data scientist. Build a Career in <br></br>
                          Data Science teaches you what school leaves out, from <br></br>
                           how  to land your first job to the lifecycle <br></br>
                            of a data science project, and even how to become a manager. 
                    </p>
                </div>

            </div>
            <AboutUsText normal={"We have everything you need to launch and to grow your academic environment."}
            mask={"The Society for Data Science is a non-profit society of data science enthusiasts that serves our members, improving the data science profession, eliminating bias and enhancing diversity, and advancing ethical data science throughout the world."}
            >

            </AboutUsText>
            <div id='container'>
                <div id='insider'>
                    <h3>
                        Define
                    </h3>
                    <p>
                        Data science is a "concept to unify statistics, data <br></br>
                        analysis, machine learning and their related methods" in <br></br>
                         order to "understand and analyze actual phenomena" with data. <br></br>
                          It employs techniques and theories drawn from many fields within <br></br>
                           the context of mathematics, statistics, computer science, and <br></br>
                            information science. 
                    </p>
                </div>
                <div id='insider'>
                    <h3>
                        Build
                    </h3>
                    <p>
                        You are going to need more than technical knowledge <br></br>
                         to succeed as a data scientist. Build a Career in <br></br>
                          Data Science teaches you what school leaves out, from <br></br>
                           how  to land your first job to the lifecycle <br></br>
                            of a data science project, and even how to become a manager. 
                    </p>
                </div>
                <div id='insider'>
                    <h3>
                        Build
                    </h3>
                    <p>
                        You are going to need more than technical knowledge <br></br>
                         to succeed as a data scientist. Build a Career in <br></br>
                          Data Science teaches you what school leaves out, from <br></br>
                           how  to land your first job to the lifecycle <br></br>
                            of a data science project, and even how to become a manager. 
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AboutUs