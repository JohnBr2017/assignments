import React from 'react'
import "./about.css"

function About() {
    return (
        <div className="about">
            <h2>Background</h2>
            <h4>Worked for Target for 15 years.</h4>
            <p className="indent5">Learned</p>
            <p className="indent10" >Communicate with a variety of different people.</p>
            <p className="indent10" >Team involvement</p>
            <br />
            <h4>Vschool for 3 months</h4>
            <h4 className="indent5">Learned</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Problem Solving</li>
                <li>Unit Testing</li>
            </ul>
            <h2>Interests</h2>
            <p className="indent5">A desire to learn the variety different coding languages.</p>
            <p className="indent5">Play around and create interesting new apps/tools/games</p>
        </div>
    )
}

export default About

// Must have a link that allows people to view and/or download your resume
// Must have your contact information (phone and/or email address)