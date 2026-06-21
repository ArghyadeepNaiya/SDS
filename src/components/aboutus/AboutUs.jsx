import React from 'react'
import AboutUsText from './AboutUsText'
import './aboutus.css'
import { backOut, motion } from 'motion/react'
const AboutUs = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full py-20'>
            <motion.hr className='hr' id='top'
                initial={{ opacity: 0, height: 0, width: 0, border: "none" }}
                whileInView={{ opacity: 1, height: 2, width: "80%", border: "none" }}
                transition={{ ease: "easeOut", duration: 1.5 }}
            ></motion.hr>
            <motion.h1 className='flex justify-center
             text-4xl text-white'
                initial={{ opacity: 0, y: 40, backgroundColor: "none", }}
                whileInView={{ opacity: 1, y: 0, backgroundColor: "rgb(218,171,0)", color: "rgb(0,0,0)" }}
                transition={{ ease: "backout", duration: 1 }} id='about'>
                About Us
            </motion.h1>
            <AboutUsText normal={"Society for Data Science is BIT Mesra's first student-run, not-for-profit organization focused on data science and its interdisciplinary applications."}
                mask={"Since our founding in 2019, we have united students from a wide range of disciplines behind our shared passion for all things data. Our mission is to foster a strong data science community on campus. Each semester, we focus on: developing educational learning experiences like our technical workshops and decal course to expand data science education on campus, hosting professional events for students to connect with industry leaders and grow their network, and conducting analytics consulting projects to help members gain experience and make an impact. Our program provides over a hundred students each semester with mentorship and data science skills through working in teams on a tangible group project. We aim to build an inclusive and accessible community where students of all levels and backgrounds can dive into the world of data science."}>

            </AboutUsText>
            <div className='relative top-30 h-150 flex flex-col md:flex-row justify-center 
            items-start w-full max-w-7xl mx-auto gap-10 px-10 my-10'
            >
                <div className='flex flex-col flex-1'>
                    <motion.h3 className='text-amber-400 text-4xl'
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeIn", duration: 1 }}>
                        Define
                    </motion.h3>
                    <motion.p className='text-neutral-400 text-2xl'
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeIn", duration: 1.5 }}>
                        Data science is a "concept to unify statistics, data
                        analysis, machine learning and their related methods" in
                        order to "understand and analyze actual phenomena" with data.
                        It employs techniques and theories drawn from many fields within
                        the context of mathematics, statistics, computer science, and
                        information science.
                    </motion.p>
                </div>
                <motion.hr className='vr'
                    initial={{ opacity: 0, height: 0, width: 0, border: "none" }}
                    whileInView={{ opacity: 1, height: 400, width: 2, border: "none" }}
                    transition={{ ease: "easeOut", duration: 1.5 }}></motion.hr>
                <div className='flex flex-col flex-1'>
                    <motion.h3 className='text-amber-400 text-4xl'
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeIn", duration: 1 }}>
                        Build
                    </motion.h3>
                    <motion.p className='text-neutral-400 text-2xl'
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeIn", duration: 1.5 }}>
                        You are going to need more than technical knowledge
                        to succeed as a data scientist. Build a Career in
                        Data Science teaches you what school leaves out, from
                        how  to land your first job to the lifecycle
                        of a data science project, and even how to become a manager.
                    </motion.p>
                </div>

            </div>
            <motion.hr className='hr'
                initial={{ opacity: 0, height: 0, width: 0, border: "none" }}
                whileInView={{ opacity: 1, height: 2, width: "80%", border: "none" }}
                transition={{ ease: "easeOut", duration: 1.5 }}
            ></motion.hr>
            <AboutUsText normal={"We have everything you need to launch and to grow your academic environment."}
                mask={"The Society for Data Science is a non-profit society of data science enthusiasts that serves our members, improving the data science profession, eliminating bias and enhancing diversity, and advancing ethical data science throughout the world."}
            >

            </AboutUsText>
            <div className='relative top-30 h-150 flex flex-col md:flex-row justify-center items-start w-full max-w-7xl mx-auto gap-10 px-10 my-10'>
                <div className='flex flex-col flex-1'>
                    <motion.h3 className='text-amber-400 text-4xl'
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeIn", duration: 1 }}>
                        Workshops
                    </motion.h3>
                    <motion.p className='text-neutral-400 text-2xl'
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeIn", duration: 1.5 }}>
                        The Data Science Workshop focuses on building up your practical skills so that you can understand how to develop simple machine learning models in Python or even build an advanced model for detecting potential bank frauds with effective modern data science. You'll learn from real examples that lead to real results.
                    </motion.p>
                </div>
                <motion.hr className='vr'
                    initial={{ opacity: 0, height: 0, width: 0, border: "none" }}
                    whileInView={{ opacity: 1, height: 400, width: 2, border: "none" }}
                    transition={{ ease: "easeOut", duration: 1.5 }}></motion.hr>
                <div className='flex flex-col flex-1'>
                    <motion.h3 className='text-amber-400 text-4xl'
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeIn", duration: 1 }}>
                        Projects
                    </motion.h3>
                    <motion.p className='text-neutral-400 text-2xl'
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeIn", duration: 1 }}>
                        Play with Data – This field uses scientific methods and algorithms. ... Good hands-on Machine Learning Skills – Data scientists generate insights using Machine Learning techniques. The most important thing is Projects – Data Science projects play a vital role in boosting your Data Science career.
                    </motion.p>
                </div>
                <motion.hr className='vr'
                    initial={{ opacity: 0, height: 0, width: 0, border: "none" }}
                    whileInView={{ opacity: 1, height: 400, width: 2, border: "none" }}
                    transition={{ ease: "easeOut", duration: 1.5 }}></motion.hr>
                <div className='flex flex-col flex-1'>
                    <motion.h3 className='text-amber-400 text-4xl'
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeIn", duration: 1 }}>
                        Open Source
                    </motion.h3>
                    <motion.p className='text-neutral-400 text-2xl'
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeIn", duration: 1.5 }}>
                        You will dive into open source because Open-Source has become the de facto way to build software — not only in tech, but across diverse industries. As companies use open source code to build their own commercial products and services, they also see the strategic value of contributing back to those projects.
                    </motion.p>
                </div>

            </div>
            <motion.hr className='hr'
                initial={{ opacity: 0, height: 0, width: 0, border: "none" }}
                whileInView={{ opacity: 1, height: 2, width: "80%", border: "none" }}
                transition={{ ease: "easeOut", duration: 1.5 }}
            ></motion.hr>
        </div>
    )
}

export default AboutUs