import {authMeApi} from "../api/api";

const  SET_USER_DATA= "SET_USER_DATA";

let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth: false
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default: {
            return state;
        }
    }

};



export function setAuthUserData(userId,email,login) {
    return {
        type: SET_USER_DATA,
        data:{userId,email,login}
    };
}
export const authMe=()=>{
    return(dispatch)=>{
        return authMeApi()

            .then(response => {
            if(response.data.resultCode ===0){
                let {userId,email,login}=response.data.data;
                dispatch(setAuthUserData(userId,email,login))
            }
        });
    }
}


export default authReduser;