import {getProfileApi, getStatusApi, updateStatusApi} from "../api/api";
import {toggleFollowingProgress, unfollowSuccess} from "./usersReduser";

const ADD_POST='ADD_POST'
const UPDATE_NEW_POST_TEXT='UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE='SET_USER_PROFILE'
const SET_STATUS='SET_STATUS'

let initialState={
    posts: [
        { id: '1', message: 'Hi, how are you?', likesCount: 12 },
        { id: '2', message: 'It is my first post', likesCount: 32 },
    ],
    newPostText: '',
    profile:null,
    status:''
}

const profileReduser=(state =initialState,action)=>{
    switch(action.type) {
        case ADD_POST: {
            return  {
                ...state,
                posts : [...state.posts,{id: '3',
                    message: action.newPostText,
                    likesCount: 0}]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText:action.text
            }
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile:action.profile
            }
        }
        case SET_STATUS:{
            return {
                ...state,
                status:action.status
            }
        }
        default: {
            return state;
        }
    };
};
export function addPostsActionCreator(newPostText){
    return{
        type: ADD_POST,
        newPostText:newPostText
    };
};

export function updateNewPostsTextActionCreator(text){
    return{
        type:UPDATE_NEW_POST_TEXT,
        text:text
    };
};
export function setUserProfile(profile) {
    return{
        type:SET_USER_PROFILE,
        profile
    };
};
export function setStatus(status){
    return{
        type:SET_STATUS,
        status
    }
}
export const getProfile =(userId)=>{
    return(dispatch)=>{
        return getProfileApi(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
            }
    }
export const getStatus =(userId)=>{
    return(dispatch)=>{
        return getStatusApi(userId).then(response=>{
            dispatch(setStatus(response.data))

        })
    }
}
export const updateStatus =(status)=>{
    return(dispatch)=>{
        return updateStatusApi(status).then(response=>{
            if (response.data.resultCode===0) {
                dispatch(setStatus(status))
            }
        })
    }
}


export default profileReduser;