import React from "react";

function List(props) {
    let { image, name } = props;
    return (
        <div>
            <h3>ello</h3>
            <h1>{name}</h1>
            <p>{image}</p>
        </div>
    )
}

export default List;