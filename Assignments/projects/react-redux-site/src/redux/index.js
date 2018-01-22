import { combineReducers, createStore, applyMiddleware } from "redux";
import spells from "./spells";
import thunk from "redux-thunk";
import filter from "./filter"

const store = createStore(
    combineReducers({spells, filter}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;






