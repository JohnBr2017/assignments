import axios from "axios";
const playerUrl = "http://localhost:8642/player/"

export function getPlayerList() {
    return dispatch => {
        dispatch({
            type: "IS_LOADING"
        })
        axios.get(playerUrl)
            .then(response => {
                dispatch({
                    type: "GET_PLAYER_LIST",
                    payload: response.data
                });
            });
    }
}
export function addNewCharacter(newPlayer) {
    return function (dispatch) {
        axios.post(playerUrl, newPlayer)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: "ADD_NEW_CHARACTER",
                    newCharacter: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
}
export function addSpell(player, spell) {
    return function (dispatch) {
        player.spells.push(spell)
        axios.put(playerUrl, player)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: "ADD_SPELL_TO_PLAYER",
                    updatedCharacter: response.data
                })
            })
    }
}



export function deletedCharacter(id) {
    return function (dispatch) {
        axios.delete(playerUrl + id, id)
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


const players = (prevState = [], action) => {
    switch (action.type) {
        case "GET_PLAYER_LIST":
            return action.payload
        case "ADD_NEW_CHARACTER":
            return [...prevState, action.newCharacter];
        case "DELETE_THE_CHARACTER":
            return prevState.filter((character) => {
                // console.log(character)
                return character._id !== action.id;
            })
        case "ADD_SPELL_TO_PLAYER":
            return prevState;
        default:
            return prevState;
    }
}



export default players;