import React from "react";
import { connect } from "react-redux";
import Recipe from "./Recipe"

function Recipes(props) {
    let { recipes } = props;
    let recipeComponent = recipes.map((recipe, i) => {
        return <Recipe key={i + recipe.name} {...recipe} index={i}></Recipe>
    })
    return (
        <div>
            {recipeComponent}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { recipes: state.recipes }
}

export default connect(mapStateToProps, {})(Recipes);