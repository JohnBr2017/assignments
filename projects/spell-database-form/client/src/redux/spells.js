import axios from "axios";
const spellUrl = "/spells/"

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
export function editedSpell(value, id) {
    return dispatch => {
        axios.put(spellUrl + id,  value )
            .then(response =>
                dispatch({
                    type: "EDIT_THE_SPELL",
                    prevState: response.data
                }))
            .catch(err =>
                console.log(err))
    }
}
export function deletedSpell(id) {
    return function (dispatch) {
        axios.delete(spellUrl + id, id)
            .then(response => {
                dispatch({
                    type: "DELETE_THE_SPELL",
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
                return spell._id === action.id
            })
        case "ADD_NEW_SPELL":
            return [...prevState, action.newSpell];
        case "DELETE_THE_SPELL":
            return prevState.filter((spell) => {
                // console.log(spell)
                return spell._id !== action.id;
            })
        case "EDIT_THE_SPELL":
            return prevState.map((spell) => {
                return spell._id === action.prevState._id ?
                    action.prevState :
                    spell;
            })
        default:
            return prevState;
    }
}


export default spells;