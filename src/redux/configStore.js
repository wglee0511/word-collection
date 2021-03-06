import { applyMiddleware, combineReducers } from "redux";
import dictionary from "./modules/dictionary";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const reducer = combineReducers({ dictionary: dictionary.reducer });

const store = configureStore({ reducer, enhancer });

export default store;
