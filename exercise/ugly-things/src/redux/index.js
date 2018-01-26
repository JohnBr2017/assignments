import { createStore, combineReducers } from "redux";
import uglies from "./uglies.js";


let store = createStore(combineReducers({ uglies }));

export default store