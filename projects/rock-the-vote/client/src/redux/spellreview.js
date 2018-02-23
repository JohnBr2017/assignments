import axios from "axios";
const reviewUrl = "http://localhost:8080/review/"

export function getReview() {
    return dispatch => {
        axios.get(reviewUrl)
            .then(response => {
                dispatch({
                    type: "GET_REVIEW",
                    payload: response.data
                });
            });
    }
}
export function addReview(newReview) {
    return function (dispatch) {
        axios.post(reviewUrl, newReview)
            .then(response => {
                dispatch({
                    type: "ADD_REVIEW",
                    newReview: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
}

export function updateReview(updatedReview, id) {
    console.log(updatedReview)
    return function (dispatch) {
        axios.put(reviewUrl + updatedReview.id, updatedReview)
            .then(response => {
                dispatch({
                    type: "UPDATED_REVIEW",
                    updatedReview: response.data
                });
            })
            .catch(err => {
                console.error(err);
            })
    }
}



export function deletedReview(id) {
    return function (dispatch) {
        axios.delete(reviewUrl + id, id)
            .then(response => {
                dispatch({
                    type: "DELETE_REVIEW",
                    id
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
}


const review = (state = { loading: true, data: [] }, action) => {
    let newData = [...state.data];
    switch (action.type) {
        case "GET_REVIEW":
            return { loading: false, data: action.payload };
        case "ADD_REVIEW":
            return {
                ...state,
                data: [...state.data, action.newReview]
            };
            case "UPDATE_REVIEW":
            for (let i = 0; i < newData.length; i++) {
                if (action.updatedReview._id === newData[i]._id) {
                    newData[i] = Object.assign(newData[i], action.updatedReview)
                }
            }
            return {
                ...state,
                data: newData
            }
            case "UPDATE_VOTE":
            for (let i = 0; i < newData.length; i++) {
                if (action.updatedVote._id === newData[i]._id) {
                    newData[i] = Object.assign(newData[i], action.updatedVote)
                }
            }
            return {
                ...state,
                data: newData
            }

        case "DELETE_REVIEW":
            return {
                loading: false,
                data: state.data.filter((review) => {
                    return review._id !== action.id;
                })
            }
        default:
            return state;
    }
}

export default review;
