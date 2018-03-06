import React, { Component } from "react";
import PropTypes from "prop-types";

function Picture(props) {
    let parentStyles ={
        backgroundImage: `url(${props.bacgroundUrl})`
    }
    return (
       <div style={parentStyles}>
           <h5>{props.caption}</h5>
           <p>{props.author}</p>
       </div>
    )
}


export default Picture;

Picture.propType = {
    backgroundUrl: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}
Picture.defaultProps = {
    
}