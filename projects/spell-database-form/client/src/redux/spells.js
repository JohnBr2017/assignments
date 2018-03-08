import axios from "axios";
const spellUrl = "http://localhost:8080/spells/"

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
export function addNewSpell(newSpell) {
    return function (dispatch) {
        axios.post(spellUrl, newSpell)
            .then(response => {
                dispatch({
                    type: "ADD_NEW_SPELL",
                    newSpell: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
}
const spells = (prevState = [], action) => {
    switch (action.type) {
        case "GET_SPELL_LIST":
            return action.payload
        case "ADD_NEW_SPELL":
            return [...prevState, action.newSpell];

        default:
            return prevState;
    }
}


export default spells;