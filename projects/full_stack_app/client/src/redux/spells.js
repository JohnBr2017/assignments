import axios from "axios";
const spellUrl = "http://localhost:8642/spells"

export function getSpellList() {
    return dispatch => {
        dispatch({
            type: "IS_LOADING"
        })
        axios.get(spellUrl)
            .then(response => {
                dispatch({
                    type: "GET_SPELL_LIST",
                    payload: response.data
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