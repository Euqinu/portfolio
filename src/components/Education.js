import React from 'react';
import NITR from '../assets/nitr.png';
import ASU from '../assets/asu.png';


const Education = () => {
    return(
        <div className="mx-14 pt-40 md:mx-48 md:pt-52">
            <h1 className="font-sans text-3xl font-semibold mb-10">Education</h1>
            <div className="flex flex-col md:flex-row">   
                <div className="mb-10 md:w-80">
                    <div className="mb-[48px]">
                        <img src={ASU} alt="asu" className="h-16 md:h-28 w-36 md:ml-[88px]"/>
                    </div>
                    <h1 className="font-sans text-base font-medium">Arizona State University</h1>
                    <p className="text-xs italic">Master of Science, Software Engineering</p>
                    <p className="text-xs italic">2022 - 2024</p>
                </div>
                <div className="md:w-80 md:mr-10">
                    <div className="mb-4">
                        <img src={NITR} alt="nitr" className="h-36 w-36 md:ml-[88px]"/>
                    </div>
                    <h1 className="font-sans text-base font-medium">National Institiute of Technology, Rourkela</h1>
                    <p className="text-xs italic">Bachelor of Technology in Computer Science and Engineering</p>
                    <p className="text-xs italic">2015 - 2019</p>
                </div>
            </div>
        </div>
    )
}

export default Education;