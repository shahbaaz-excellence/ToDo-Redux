import { createStore, combineReducers } from "redux";
import { todos } from './reducer/reducer';

export default createStore(
    combineReducers({ todos }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);