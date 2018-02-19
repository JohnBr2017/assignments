import React from 'react'

import "./projects.css"

import project1 from "../../images/project1.png"

function Projects() {
    return (
        <div>
            <h1>Examples of projects</h1>
            <div>
                <h2>Project example 1</h2>
                <p>Description</p>
                <img src={project1} className="project1" alt="something" />
            </div>
            <div>
                <h2>Project example 1</h2>
                <p>Description</p>
                <img src={project1} className="project1" alt="something" />
            </div>
            <div>
                <h2>Project example 1</h2>
                <p>Description</p>
                <img src={project1} className="project1" alt="something" />
            </div>
        </div>
    )
}

export default Projects