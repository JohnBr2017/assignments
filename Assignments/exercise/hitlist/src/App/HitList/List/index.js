import React, {Component} from "react";



function List(props){
    let {image, name}=props;
    return(
        <div>
            <h1>{name}</h1>
            <p>{image}</p>
        </div>
    )
}

export default List;