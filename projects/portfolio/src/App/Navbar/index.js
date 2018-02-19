import React from "react";
import { Link } from "react-router-dom";



function Navbar(props) {
    return (
        <div className="navbar">
            <Link  to="/" >Home</Link>
            <Link  to="/projects" >Projects</Link>
            <Link  to="/about" >About</Link>
        </div>
    )
}

export default Navbar;