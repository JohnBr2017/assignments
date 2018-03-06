import React, { Component } from "react";

function Nav(props) {
    return (
        <div style={props.parentStyle}>
            {props.links.map((link) => {
                return <a style={props.childStyle} href={link.href}>{link.name}</a>
            })}
        </div>
    )
}


export default Nav;