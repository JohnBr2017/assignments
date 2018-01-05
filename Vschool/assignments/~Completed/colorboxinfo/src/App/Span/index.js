import React, { Component } from "react";

function Span(props) {
    return (
        <div style={props.parentStyle}>
            {props.contents.map((content) => {
                return <h2>{content.title}<br/>
                    {content.subTitle}<br/>
                    {content.info}</h2>
        })}
        </div>
    )
}


export default Span;