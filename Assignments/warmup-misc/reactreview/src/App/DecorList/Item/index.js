import React, { Component } from "react";


function Item(props){
    let { size, type, color} = props;
    return(
        <div>
            <h3>{type}</h3>
            <h4>{color}</h4>
            <h4>{size}</h4>
        </div>
    )
}





export default Item;