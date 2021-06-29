import { applyMiddleware, combineReducers, createStore } from "redux";
import dictionary from "./modules/dictionary";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const reducer = combineReducers({ dictionary });

const store = createStore(reducer, enhancer);

export default store;
