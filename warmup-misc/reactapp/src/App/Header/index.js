import React, { Component } from "react";
import "./index.css";


function Header(props) {
    return (
        <header>
            <h1><img src="https://yt3.ggpht.com/-0eDG29ML-Uo/AAAAAAAAAAI/AAAAAAAAAAA/v4hEM9DQLmM/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" height="60" ></img>
                <font color="red">Red</font> vs <font color="blue">Blue</font>
            </h1>
            <h2>RoosterTeeth
                <img src="http://yourockwoohoo.com/assets/images/RT_Logo.png" height="60" ></img>
            </h2>
        </header>
    )
}


export default Header;