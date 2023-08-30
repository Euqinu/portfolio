import React from 'react';
import CardType from '../common/CardType';
import GunViolence from '../assets/gunviolenceUI.jpg'
import Research from '../assets/researchpaper.png'
import Authentication from '../assets/authentication.jpg'

const Projects = () => {
    let gunviolenceProject = {
        title:'Gun Violence Analyser Tracker Using Semantic Data Integration',
        description:'Gun Violence Tracker web application to create a visually appealing and interactive platform. An ontology was created to generate meaningful and structured data.',
        tools:['React','Express','Java','Google Cloud Platform'],
        image: GunViolence
        
    }
    let gunviolenceResearch = {
        title:' 2023 IEEE 17th International Conference on Semantic Computing (ICSC)',
        description:'Gun Violence Tracker Using Semantic Data Integration project\'s excellence was recognized at the 2023 IEEE 17th International Conference on Semantic Computing, where the accompanying research paper was published, contributing to the field of semantic computing and further validating the impact of the project.',
        tools:['Click to Open'],
        image: Research
        
    }
    let authentication = {
        title:'OAuth Authentication',
        description:'A service for login authentication implementing OAuth 2.0 where the user can login using Gmail and Facebook.',
        tools:['Node.js','Express','React','OAuth 2.0'],
        image:Authentication
    }
    return (
        <div id="projects" className='mx-14 pt-40 md:mx-48 md:pt-52'>
            <h1 className='font-sans text-3xl font-semibold mb-6'>Projects</h1>
            <div className='flex flex-col md:flex-row'>
                <a href='https://ieeexplore.ieee.org/document/10066718' target='_blank'>
                    <CardType project={gunviolenceResearch}/>
                </a>
                <CardType project={gunviolenceProject}/>
                <CardType project={authentication}/>
            </div>
            
        </div>

    )
}

export default Projects;