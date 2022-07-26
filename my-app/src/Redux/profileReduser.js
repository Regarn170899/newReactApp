const ADD_POST='ADD_POST'
const UPDATE_NEW_POST_TEXT='UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE='SET_USER_PROFILE'

let initialState={
    posts: [
        { id: '1', message: 'Hi, how are you?', likesCount: 12 },
        { id: '2', message: 'It is my first post', likesCount: 32 },
    ],
    newPostText: '',
    profile:null
}

const profileReduser=(state =initialState,action)=>{
    switch(action.type) {
        case ADD_POST: {
            return  {
                ...state,
                posts : [...state.posts,{id: '3',
                    message: state.newPostText,
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
        default: {
            return state;
        }
    };
};
export function addPostsActionCreator(){
    return{
        type: ADD_POST
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

export default profileReduser;