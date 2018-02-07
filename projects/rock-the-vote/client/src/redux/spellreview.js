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
export function updateSpellReview(updatedSpellReview) {
    return function (dispatch) {
        axios.put(reviewUrl + updatedSpellReview._id, updatedSpellReview)
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
// export const updateIssue = (updatedIssue, id) => {
//     return dispatch => {
//         axios.put(issueUrl + id, updatedIssue)
//             .then((response) => {
//                 dispatch({
//                     type: "UPDATE_ISSUE",
//                     updatedIssue: response.data,
//                     id
//                 })
//             })
//     }
// }

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
    switch (action.type) {
        case "GET_SPELL_REVIEW":
            return { loading: false, data: action.payload };
        case "ADD_SPELL_REVIEW":
            return {
                ...state,
                data: [...state.data, action.newSpell]
            };
        case "UPDATE_SPELL_REVIEW":
        return {
            loading: false,
            data: state.data.map((spell) => {
                if (spell._id === action.id) {
                    return action.updatedSpell;
                } else {
                    return spell
                }
            })
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
