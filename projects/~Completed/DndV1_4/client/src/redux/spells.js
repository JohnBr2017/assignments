import axios from "axios";
const spellUrl = "http://localhost:8642/spells/"

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
export function getSpellById(id) {
    return function (dispatch) {
        axios.get(spellUrl + id, id)
            .then(response => {
                dispatch({
                    type: "GET_SINGLE_SPELL",
                    payload: response.data
                })
            })
    }
}
export function deletedSpell(id) {
    return function (dispatch) {
        axios.delete(spellUrl + id, id)
            .then(response => {
                dispatch({
                    type: "DELETE_THE_CHARACTER",
                    id
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

const spells = (prevState = [], action) => {
    switch (action.type) {
        case "GET_SPELL_LIST":
            return action.payload
        case "GET_SINGLE_SPELL":
            return prevState.filter((spell) => {
                console.log(spell)
                return spell._id === action.id
            })
            case "DELETE_THE_CHARACTER":
            return prevState.filter((spell) => {
                // console.log(character)
                return spell._id !== action.id;
            })

        default:
            return prevState;
    }
}


export default spells;