import axios from "axios";

export function getStarships() {
    return dispatch => {
        dispatch({
            type: "IS_LOADING"
        })
        axios.get("https://swapi.co/api/starships/")
            .then(response => {
                dispatch({
                    type: "GET_STARSHIPS",
                    payload: response.data.results
                });
            });
    }
    // return {
    //     type: "GET_STARSHIPS",
    //     payload: data
    // }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case "GET_STARSHIPS":
            return action.payload
        default:
            return state;
    }
}

export default reducer;