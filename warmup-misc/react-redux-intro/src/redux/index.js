import { createStore, combinecReducers } from "redux";
import count from "./count.js";

let store = createStore(combineReducers({count}));

export default store;
