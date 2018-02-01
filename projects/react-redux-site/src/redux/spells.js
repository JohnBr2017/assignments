import axios from "axios";

export function getSpellList() {
    return dispatch => {
        dispatch({
            type: "IS_LOADING"
        })
        axios.get("http://dnd5eapi.co/api/spells")
            .then(response => {
                dispatch({
                    type: "GET_SPELL_LIST",
                    payload: response.data.results
                });
            });
    }
}
const spells = (state = [], action) => {
    switch (action.type) {
        case "GET_SPELL_LIST":
            return action.payload
        default:
            return state;
    }
}


export default spells;