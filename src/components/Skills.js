import React from 'react';
import { BsBoundingBoxCircles } from 'react-icons/bs';
import Javascript from '../assets/Javascript.svg'
import Java from '../assets/Java.svg'
import Css from '../assets/CSS.svg'
import Docker from '../assets/Docker.svg'
import Figma from '../assets/Figma.svg'
import MongoDB from '../assets/MongoDB.svg'
import Node from '../assets/Node.svg'
import Postman from '../assets/Postman.svg'
import Sass from '../assets/Sass.svg'
import Typescript from '../assets/Typescript.svg'
import SQL from '../assets/SQL.svg'
import Git from '../assets/Git.svg'
import Scala from '../assets/Scala.svg'
import ReactSkill from '../assets/React.svg'
import Flutter from '../assets/Flutter.svg'
import Tailwind from '../assets/Tailwind.svg'
import Vue from '../assets/Vue.svg'

import Bootstrap from '../assets/bootstrap.svg'

import SkillTile from '../common/SkillTile';



const Skills = () => {
    let languages = {
        Javascript:Javascript,
        Java:Java,
        Typescript:Typescript,
        Scala:Scala,
        "HTML/CSS":Css,
    }
    let frameworks = {
        React:ReactSkill,
        Node:Node,
        Vue:Vue,
        Tailwind:Tailwind,
        Sass:Sass,
        Bootstrap:Bootstrap,
        Flutter:Flutter,
        Postman:Postman
    }
    let tools = {
        Git:Git,
        Docker:Docker,
        Figma:Figma
    }
    return(
        <div className="mx-14 pt-40 md:mx-48 md:pt-52">
            <h1 className='font-sans text-3xl font-semibold mb-6'>Skills</h1>
                <SkillTile title="Languages" items={languages}/>
                <SkillTile title="Frameworks" items={frameworks}/>
                <SkillTile title="Tools" items={tools}/>
        </div>
    )

}

export default Skills;