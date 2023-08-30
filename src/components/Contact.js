import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


const Contact = () => {
    return (
        <div id='contact' className="mx-14 pt-40 md:mx-48 md:py-52">
            <h1 className="text-center font-sans text-3xl font-semibold mb-12">Contact Me</h1>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='mt-7 md:mt-0 mr-12'>
                    <div className='flex  w-[20%] mb-6'>
                        <div className='mr-5'>
                            <MdOutlineEmail size={30} />
                        </div>
                        <div className=''>
                            <p className='font-serif text-base font-bold'>Email</p>
                            <p>uniquechhetrii@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex w-[20%] mb-6'>
                        <div className='mr-5'>
                            <AiFillGithub size={30} />
                        </div>
                        <div className=''>
                            <p className='font-serif text-base font-bold'>Github</p>
                            <p><a href="https://github.com/Euqinu?tab=repositories">github.com/Euqinu</a></p>
                        </div>
                    </div>
                    <div className='flex w-[20%] mb-6'>
                        <div className='mr-5'>
                            <AiFillLinkedin size={30} />
                        </div>
                        <div className=''>
                            <p className='font-serif text-base font-bold'>LinkedIn</p>
                            <p><a href="https://www.linkedin.com/in/uniquechhetri/">linkedin.com/uniquechhetri</a></p>
                        </div>
                    </div>
                    <div className='flex w-[20%] mb-6'>
                        <div className='mr-5'>
                            <CiLocationOn size={30} />
                        </div>
                        <div className=''>
                            <p className='font-serif text-base font-bold'>Location</p>
                            <p>Tempe,&nbsp;Arizona</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <form>
                        <div className='flex mb-6'>
                            <div className='w-60 mr-8 p-2 bg-white rounded-lg'>
                                <label className='text-xs font-medium'>Name</label><br />
                                <input type='text' className='w-32 mt-2 outline-none' />
                            </div>
                            <div className='w-60 p-2 bg-white rounded-lg'>
                                <label className='text-xs font-medium'>Email</label><br />
                                <input type='text' className='w-32 mt-2 outline-none' />
                            </div>
                        </div>
                        <div className='p-2 w-[100%] mr-20 mb-6 bg-white rounded-lg'>
                            <label className='text-xs font-medium'>Subject</label><br />
                            <input type='text' className='w-32 mt-2 outline-none' />
                        </div>
                        <div className='p-2 w-[100%] mr-20 mb-6 bg-white rounded-lg'>
                            <label className='text-xs font-medium'>Message</label><br />
                            <textarea className='outline-none w-[100%]'></textarea>
                        </div>
                        <button className='px-6 py-4 mb-4 md:ml-36 bg-white rounded-2xl font-bold'>Send message</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact;