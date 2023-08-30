import React, { useState } from 'react';
import Computer from '../assets/computer.png';
import { AiFillHeart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import { Typewriter } from 'react-simple-typewriter'
import { HashLink } from 'react-router-hash-link';


// bg-[#f7f3f2]
const Home = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const handleDrawer = () => {
        setShowDrawer(!showDrawer)
    }
    return (
        <div className="bg-[#f2f3f5]">
            {
                showDrawer && (
                    <div className='md:hidden h-full w-40 z-[2] bg-black border-s-white border-r-2 fixed'>
                    <div className='h-full cursor-pointer'>
                        <AiFillCloseCircle onClick={()=>handleDrawer()} color='white' size={23} className='m-4 float-right'/>
                        <ul className="text-white flex flex-col grow h-full p-5">
                            <HashLink smooth to={'/portfolio/#'} >
                                <li className="px-4 mb-4 mt-12">Home</li>
                            </HashLink>
                            <HashLink smooth to={'/portfolio/#about'} >
                                <li className="px-4 mb-4">About</li>
                            </HashLink>
                            <HashLink smooth to={'/portfolio/#experience'}>
                                <li className="px-4 mb-4">Experience</li>
                            </HashLink>
                            <HashLink smooth to={'/portfolio/#projects'}>
                                <li className="px-4 mb-4">Projects</li>
                            </HashLink>
                            <HashLink smooth to={'/portfolio/#contact'}>
                                <li className="px-4 mb-4">Contact</li>
                            </HashLink>
                        </ul>
                    </div>
                   
                </div>
                )
            }
            <div className="flex sticky top-0 z-[1] w-[100%] justify-between bg-black p-8 shadow-lg">
                <div className='md:hidden cursor-pointer' onClick={()=>handleDrawer()}>
                    <GiHamburgerMenu color='white' />
                </div>
                <HashLink smooth to="/portfolio/#">
                    <div className="">
                        <h1 className="text-white">UNIQUE CHHETRI</h1>
                    </div>
                </HashLink>
                <div className='hidden md:block'>
                    <ul className="text-white flex">
                        <HashLink smooth to={'/portfolio/#'} >
                            <li className="px-4">Home</li>
                        </HashLink>
                        <HashLink smooth to={'/portfolio/#about'} >
                            <li className="px-4">About</li>
                        </HashLink>
                        <HashLink smooth to={'/portfolio/#experience'}>
                            <li className="px-4">Experience</li>
                        </HashLink>
                        <HashLink smooth to={'/portfolio/#projects'}>
                            <li className="px-4">Projects</li>
                        </HashLink>
                        <HashLink smooth to={'/portfolio/#contact'}>
                            <li className="px-4">Contact</li>
                        </HashLink>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:m-10 md:mb-0">
                <div className="m-10 md:w-[50%]">
                    <h1 className="font-sans text-2xl">Hi, my name is </h1>
                    <h1 className='my-6 md:my-4 font-sans text-6xl'>Unique Chhetri,</h1>
                    <p className="font-mono mb-10 text-gray-400">
                        A Software Engineering graduate student at <span className="text-[#8C1D40]">Arizona State University</span>. With a fervent passion for coding and an insatiable curiosity for emerging tech, I'm on a mission to craft inventive solutions that push the boundaries of software development.
                    </p>
                    <HashLink className='p-4 bg-green-300 rounded-lg' smooth to={'/#contact'}>
                        Contact Me
                    </HashLink>
                </div>
                <div className="p-8 ml-[20%] md:ml-0">
                    <div className="relative z-[0]">
                        <img className=" h-40 w-15 md:h-80 md:w-30" src={Computer} alt='computer' />
                        <h1 className="font-semibold text-xs absolute top-[25%] left-[37%] md:text-lg md:left-[45%]">
                            <Typewriter
                                words={['Coder', 'full-stack', 'web dev', 'design', 'blockchain']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />

                        </h1>
                    </div>
                </div>
            </div>
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <div className='mt-7 md:mt-0 p-7'>
                <p className='text-center font-mono text-sm font-semibold'>Made with <AiFillHeart color='red' className='inline' /> by Unique Chhetri </p>
            </div>

        </div>
    )
}

export default Home;