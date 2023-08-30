import React from 'react';
import { BsBoundingBoxCircles } from 'react-icons/bs';



const SkillTile = (props) => {

    return (
        <div className="mt-14">
            <span><BsBoundingBoxCircles className="inline text-xl mr-3" /> <span className="text-xl">{props.title}</span></span>
            <div className="flex flex-wrap">
                {
                    Object.keys(props.items).map((data,index) => (
                        <>
                            <div className="p-6 mx-2" key={index}>
                                <img src={props.items[data]} className="h-11 w-14" alt="js" />
                                <p className="text-center mt-2">{data}</p>
                            </div>
                        </>
                    ))
                }
            </div>

        </div>
    )
}

export default SkillTile;