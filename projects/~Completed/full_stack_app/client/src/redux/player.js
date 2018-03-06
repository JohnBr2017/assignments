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
    // console.log(spell)
    return function (dispatch) {
        let testPlayer = player
        testPlayer.listOfSpells.push(spell)
        axios.put(playerUrl + player._id,  {value: player} )
            .then(response => {
                dispatch({
                    type: "ADD_SPELL_TO_PLAYER",
                    updatedCharacter: response.data
                })
            })
    }
}
export function inputChange(id, value) {
    console.log(playerUrl + id, "what will show")
    return dispatch => {
        axios.put(playerUrl + id, { value })
            .then(response =>
                dispatch({
                    type: "TOGGLE_ACTIVE",
                    prevState: response.data
                }))
            .catch(err =>
                console.log(err))
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
        return  prevState.map((newSpell) => {
                return newSpell._id === action.updatedCharacter._id ?
                    action.updatedCharacter :
                    newSpell;
            })
        
            
        case "TOGGLE_ACTIVE":
            return prevState.map((player) => {
                // console.log(player._id, "HEY YOU GUYS here")
                return player._id === action.prevState._id ?
                    action.prevState :
                    player;
            })


        default:
            return prevState;
    }
}




export default players;