

let initialState={
    posts: [
        { id: '1', message: 'Hi, how are you?', likesCount: 12 },
        { id: '2', message: 'It is my first post', likesCount: 32 },
    ],
    newPostText: ''
}

const profileReduser=(state =initialState,action)=>{
    switch(action.type) {
        case 'ADD-POST': {
            return  {
                ...state,
                newPostText:'',
                posts : [...state.posts,{id: '3',
                    message: state.newPostText,
                    likesCount: 0}]
            };
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return  {
                ...state,
                newPostText:action.text
            }
        }
        default: {
            return state;
        }
    };
};
export function addPostsActionCreator(){
    return{
        type: 'ADD-POST'
    };
};

export function updateNewPostsTextActionCreator(text){
    return{
        type:'UPDATE-NEW-POST-TEXT',
        text:text
    };
};

export default profileReduser;