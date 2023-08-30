import React from 'react';


const CardType = (props) => {
    return(
        <div className='mb-7 md:mb-0 mr-6 bg-white w-80 rounded-2xl'>
          <div className='p-2'>
            <img className='h-40 w-[100%]' src={props.project.image} alt="projectImage" />
          </div>
          <hr className=''/>
          <div className='p-3'>
            <h1 className='font-sans font-medium my-2'>{props.project.title}</h1>
            <p className='mb-5 text-gray-500 text-sm'>
                {props.project.description}
            </p>
            {
                props.project.tools.map(data=>(
                    <span key={data} className='mr-5 text-gray-400 text-xs'>{data}</span>
                ))
            }
          </div>
        </div>
    )
}

export default CardType;