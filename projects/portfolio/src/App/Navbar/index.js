import React from "react";
import { Link } from "react-router-dom";

import Linkedin from "../../images/Linkedin.png";
import GitHub from "../../images/Github.png"



import "./navbar.css"

function Navbar(props) {
    return (
        <div className="navbar">
            <Link className="links" to="/" >Home</Link>
            <a href="https://www.linkedin.com/in/johnathan-broadhead-825660155">
                <img className="linkImages" src={Linkedin} alt="Linkedin" />
            </a>
            <Link className="links" to="/projects" >Projects</Link>
            <a href="https://github.com/JohnBr2017">
                <img className="linkImages" src={GitHub} alt="GitHub" />
            </a>
            <Link className="links" to="/about" >About</Link>
        </div>
    )
}
export default Navbar;