import React from 'react'
import services from "../../shared/services.json"

function Service(props) {
    let { index } = props.match.params;
    let { name, price, description } = services[index];
    return (
        <div>
            <h1>{name}</h1>
            <p>${price}</p>
            <p>{description}</p>
        </div>
    )
}

export default Service;
