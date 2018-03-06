import axios from "axios";
const reviewUrl = "http://localhost:8080/review/"

export function updateVote(newScore, id) {
    return function (dispatch) {
        axios.post(reviewUrl + id, newScore)
        console.log(newScore)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: "NEW_SCORE",
                    newPlayerScore: response.data 
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
}
const vote = (prevScore = { value: 0, totalVoters: "" }, action) => {
    switch (action.type) {
        case "CHANGE_SCORE":
            // return {
                // value: (prevScore.value + action.payload),
                // totalVoters: prevScore.totalVoters
                let total = prevScore + action.amount
                return total < 0 ? prevScore : prevScore + action.amount
            // }
        default:
            return prevScore;
    }
}
export default vote;
