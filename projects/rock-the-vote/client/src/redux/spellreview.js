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

const spellreview = (state = { loading: true, data: [] }, action) => {
    switch (action.type) {
        case "GET_SPELL_REVIEW":
            return { loading: false, data: action.payload };
        default:
            return state;
    }
}

export default spellreview;
