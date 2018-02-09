import axios from "axios";
const reviewUrl = "http://localhost:8080/spellreview/"

export function getSpellReview() {
    return dispatch => {
        axios.get(reviewUrl)
            .then(response => {
                dispatch({
                    type: "GET_SPELL_REVIEW",
                    payload: response.data
                });
            });
    }
}
export function addSpellReview(newSpell) {
    return function (dispatch) {
        axios.post(reviewUrl, newSpell)
            .then(response => {
                dispatch({
                    type: "ADD_SPELL_REVIEW",
                    newSpell: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
}

export function updateSpellReview(updatedSpell, id) {
    return function (dispatch) {
        axios.put(reviewUrl  + updatedSpell._id, updatedSpell)
            .then(response => {
                dispatch({
                    type: "UPDATED_SPELL_REVIEW",
                    updatedSpell: response.data
                });
            })
            .catch(err => {
                console.error(err);
            })
    }
}


export function deletedSpellReview(id) {
    return function (dispatch) {
        axios.delete(reviewUrl + id, id)
            .then(response => {
                dispatch({
                    type: "DELETE_SPELL_REVIEW",
                    id
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
}


const spellreview = (state = { loading: true, data: [] }, action) => {
    let newData = [...state.data];
    switch (action.type) {
        case "GET_SPELL_REVIEW":
            return { loading: false, data: action.payload };
        case "ADD_SPELL_REVIEW":
            return {
                ...state,
                data: [...state.data, action.newSpell]
            };
        case "UPDATE_SPELL_REVIEW":
            // let newData=state.data;
            for (let i = 0; i < newData.length; i++) {
                if (action.updatedSpell._id === newData[i]._id) {
                    newData[i] = Object.assign(newData[i], action.updatedSpell)
                }
            }
            return {
                ...state,
                data: newData
            }
        case "DELETE_SPELL_REVIEW":
            return {
                loading: false,
                data: state.data.filter((spell) => {
                    return spell._id !== action.id;
                })
            }
        default:
            return state;
    }
}

export default spellreview;
