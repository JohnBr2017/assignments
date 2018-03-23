import { combineReducers, createStore, applyMiddleware } from "redux";
import spellReviews from "./spellreview";
import vote from "./vote"
import thunk from "redux-thunk";

const store = createStore(
    combineReducers({spellReviews, vote}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;
