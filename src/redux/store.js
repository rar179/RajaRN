import { createStore , combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const rootReducer = combineReducers({common:userReducer});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));