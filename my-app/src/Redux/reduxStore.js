import {combineReducers, legacy_createStore} from "redux";
import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";
import usersReduser from "./usersReduser";

let redusers=combineReducers({
    profilePage:profileReduser,
    dialogsPage:dialogsReduser,
    usersPage:usersReduser
});

let store = legacy_createStore(redusers)

window.store=store;
export default store;

