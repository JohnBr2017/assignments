const recipesReducer = (prevRecipe = [], action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            return [...prevRecipe, action.recipe];
        case "EDIT_RECIPE":
            return [...prevRecipe].map((recipe, i) => {
                if (i === action.index) {
                    return action.updatedRecipe;
                } else {
                    return recipe
                }
            });
        case "REMOVE_RECIPE":
            return [...prevRecipe].filter((recipe, i) => {
                return i !== action.index;
            })
        default:
            return prevRecipe;
    }
}

export const addRecipe = (recipe) => {
    return {
        type: "ADD_RECIPE",
        recipe
    }
}

export const editRecipe = (updatedRecipe, index) => {
    return {
        type: "EDIT_RECIPE",
        updatedRecipe,
        index
    }
}

export const removeRecipe = (index) => {
    return {
        type: "REMOVE_RECIPE",
        index
    }
}


export default recipesReducer;