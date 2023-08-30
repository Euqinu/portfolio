import React from 'react';
import Unique from '../assets/profilepic.jpg'

const About = () => {
    return (
            <div id="about" className='mx-14 pt-40 md:mx-48 md:pt-52 flex flex-col-reverse md:flex-row md:justify-between'>
            <div className='md:w-[50%]'>
                <h1 className='font-sans text-2xl font-semibold mb-10'>About Me</h1>
                <div className='md:hidden ml-[20%] md:ml-0 mb-6'>
                    <img className='h-40 w-40 rounded-3xl mx-6' src={Unique} alt="profile picture" />
                </div>
                <p className='font-mono text-lg/10'>
                    I'm a Graduate student at Arizona State University majoring in Software Engineering.
                    I am a passionate programmer interested in the fields of full stack development, app development,
                    and UI/UX. I am always looking forward to learning new ideas, developing my skills, and making
                    new connections. I am currently seeking a Software Engineering role for Fulltime or Internship.
                </p>
            </div>
            <div className='hidden md:block md:w-[50%] md:relative'>
                <div className='rounded-3xl md:h-80 md:w-80 border-solid border-2 border-indigo-600 absolute right-0'>
                    <img className='h-80 w-80 rounded-3xl mx-6 absolute top-8 right-3' src={Unique} alt="profile picture" />
                </div>
            </div>
        </div>       
    )
}

export default About;