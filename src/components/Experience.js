import React, { useState } from 'react';
import { BsPlay } from 'react-icons/bs';
import { ExperienceList } from './ExperienceList';

const Experience = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const handleClick = (index) => {
        setTabIndex(index)
    }
    return (
        <div id="experience" className="mx-14 pt-40 md:mx-48 md:pt-52">
            <h1 className='font-sans text-3xl font-semibold mb-6'>Experience</h1>
            <div className="flex mt-10">
                <div className='mr-6'>
                    {
                        ExperienceList.map((data, index) => (
                            <ul onClick={()=>handleClick(index)} className='cursor-pointer'>
                                <li className={`mb-5 font-medium text-sm py-3 px-4 rounded-3xl ${index==tabIndex &&  'bg-white' } `}>
                                    {data.title}
                                </li>
                            </ul>

                        ))
                    }
                </div>
                <div>
                    <div className='mb-7 md:mb-4'>
                        <h2 className='font-normal'>{ExperienceList[tabIndex].role}</h2>
                        <p className='font-thin'>{ExperienceList[tabIndex].start} - {ExperienceList[tabIndex].end}</p>
                    </div>
                    <ul>
                        {
                            ExperienceList[tabIndex].detail.map((desc) => (
                                <li className='mb-5 flex'>
                                    <span> <BsPlay className='mt-1 mr-2'/> </span>
                                    <span className='font-mono text-sm md:text-base'>
                                        {desc}
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Experience;

