import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css"


function Navbar(props) {
    return (
        <div className="navbar">
            <Link className="navlinkhome" to="/" >Home</Link>
            <Link className="navlinkspell" to="/spellbook" >Almighty Spellbook</Link>
            <Link className="navlinkabout" to="/about" >About</Link>
            {/* <Link className="navlinkdm" to="/dmbook" >DM-Book</Link> */}
        </div>
    )
}

export default Navbar;