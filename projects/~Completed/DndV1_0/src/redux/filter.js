// import axios from "axios";

// import store from "./index";



export const filterSpelllist = filter => {
    return dispatch => {
        dispatch({
            type: "FILTER_SPELLS",
            filter
        });
    }
}
const filter = (state = "all", action) => {
    switch (action.type) {
        case "FILTER_SPELLS":
            return {
                ...state,
                filterBy: action.filterer
            }
        default:
            return state;
    }
}





export default filter;
