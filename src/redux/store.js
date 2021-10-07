import {createStore, combineReducers, applyMiddleware} from "redux";
import {reducer as formReducer} from "redux-form";
import searchReducer from './search-reducer';
import filmReducer from './film-reducer';

import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    searchPage: searchReducer,
    filmPage: filmReducer,
    form: formReducer,
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;