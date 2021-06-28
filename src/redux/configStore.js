import { combineReducers, createStore } from "redux";
import dictionary from "./modules/dictionary";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const reducer = combineReducers({ dictionary });

const store = createStore(reducer);

export default store;
