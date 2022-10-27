import {authApi, authMeApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {authMe} from "./authReduser";

const  INITIALIZED_SUCCESS= 'INITIALIZED_SUCCESS';

let initialState = {
    initialized:false
}

const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized:true
            }
        default: {
            return state;
        }
    }

};



export function initializedSuccess (){
    return {
        type: INITIALIZED_SUCCESS,

    };
}
export const initializeApp=()=>{
    return(dispatch)=>{
        let promise=dispatch(authMe())
        /*dispatch(authMe());
        dispatch(initializedSuccess());*/
        Promise.all([promise])
            .then(()=>{
                dispatch(initializedSuccess());
        })
    }
}

export default appReduser;