import React, { Component } from "react";
import Gallery from "./Gallery"

function Content(props) {
    return (
        <div style={props.parentStyle}>
            {props.contents.map((content) => {
                return <h1>{content.title}<br/>
                    {content.subTitle}<br/>
                    {content.info}</h1>
        })}
        </div>
    )
}


export default Content;

