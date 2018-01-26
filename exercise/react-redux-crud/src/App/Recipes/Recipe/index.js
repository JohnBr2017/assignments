import React from "react";
import { connect } from "react-redux";
import { removeRecipe } from "../../../Redux/recipes.js"
import Form from "../../../shared/Form.js"

function Recipe(props) {
    let { index, name, category, cookTime, removeRecipe} = props;
    return (
        <div>
            <h3>{name}</h3>
            <p>{category}</p>
            <p>{cookTime}</p>
            <button onClick={()=> removeRecipe(index)}>X</button>
            <Form edit {...props}></Form>
        </div>
    )
}

export default connect(null, { removeRecipe })(Recipe);