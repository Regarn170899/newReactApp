import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";
import usersReduser from "./usersReduser";
import authReduser from "./authReduser";
import  thunkMiddleware from'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers=combineReducers({
    profilePage:profileReduser,
    dialogsPage:dialogsReduser,
    usersPage:usersReduser,
    auth:authReduser,
    form:formReducer
});

let store = legacy_createStore(reducers,applyMiddleware(thunkMiddleware))

window.store=store;
export default store;

