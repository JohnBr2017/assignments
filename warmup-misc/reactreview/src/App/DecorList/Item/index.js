import React from 'react';
import EditForm from "./EditForm";

function Item(props) {
    let { size, type, color, deleteItem, index, editItem } = props;
    return (
        <div>
            <h3>{type}</h3>
            <p>{color}</p>
            <p>{size}</p>
            <button onClick={() => deleteItem(index)}>X</button>
            <EditForm {...props}></EditForm>
        </div>
    )
}

export default Item;