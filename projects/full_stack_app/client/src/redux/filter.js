// import axios from "axios";

// import store from "./index";



export const filterSpellList = filter => {
    return dispatch => {
        dispatch({
            type: "FILTER_SPELLS",
            filter
        });
    }
}
const filter = (state =[], action) => {
    switch (action.type) {
        case "FILTER_SPELLS":
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state;
    }
}





export default filter;
