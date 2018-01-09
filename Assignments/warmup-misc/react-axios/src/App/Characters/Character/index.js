import React, {Component} from "react";

function Character(props){
    let {skin_color, name} = props;
    return(
        <div>
            <h3>{name}</h3>
            <p>{skin_color}</p>
        </div>
    )
}

export default Character;