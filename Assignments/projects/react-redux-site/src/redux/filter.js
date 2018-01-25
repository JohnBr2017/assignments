// import axios from "axios";

// import store from "./index";



export function getFilteredSpell(filter){
    return {
        type: "FILTERED_SPELLS",
        filter
    }
}
const filter = (state = "All", action) => {
    switch (action.type) {
        case "FILTERED_SPELLS":
           return action.filter
        default:
        return state;
    }
}





export default filter;
