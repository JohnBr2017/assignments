import axios from "axios";

export function getSpellReview() {
    return dispatch => {
        axios.get("http://localhost:8080/spellreview")
            .then(response => {
                dispatch({
                    type: "GET_SPELL_REVIEW",
                    payload: response.data
                });
            });
    }
}
export function addSpellReview(newSpellReview) {
    return function (dispatch) {
        axios.post("http://localhost:8080/spellreview", newSpellReview)
            .then(response => {
                dispatch({
                    type: "ADD_SPELL_REVIEW",
                    newSpellReview: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
}
export function updateSpellReview(updatedSpellReview) {
    return function (dispatch) {
        axios.put("http://localhost:8080/spellreview" + "/" + updatedSpellReview._id, updatedSpellReview)
            .then(response => {
                dispatch({
                    type: "UPDATE_SPELL_REVIEW",
                    updatedSpellReview: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
}
const spellreview = (state = { loading: true, data: [] }, action) => {
    switch (action.type) {
        case "GET_SPELL_REVIEW":
            return { loading: false, data: action.payload };
        case "ADD_SPELL_REVIEW":
            return {
                ...state,
                data: [...state.data, action.newSpellReview]
            };
        case "UPDATE_SPELL_REVIEW":
            let newData = state.data
            for (let i = 0; i < newData.length; i++) {
                if (action.updatedSpellReview._id === newData[i]._id) {
                    newData[i] = Object.assign(newData[i], action.updatedSpellReview);
                }
            }
            return {
                ...state,
                data: newData
            }
        default:
            return state;
    }
}

export default spellreview;
