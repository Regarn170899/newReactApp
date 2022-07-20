import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";



let store = {
    _state : {
        profilePage: {
            posts: [
                { id: '1', message: 'Hi, how are you?', likesCount: 12 },
                { id: '2', message: 'It is my first post', likesCount: 32 },
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 'Sasha', name: 'Sasha' },
                { id: 'Anton', name: 'Anton' },
                { id: 'Kiril', name: 'Kiril' },
                { id: 'Sveta', name: 'Sveta' },
            ],
            newMessage: '',
            messages: [
                { id: 'Sasha', message: 'Hi' },
                { id: 'Anton', message: 'How are you?' },
                { id: 'Kiril', message: 'Hello' },
                { id: 'Sveta', message: 'Hello world' },
            ],
            
        },
    },
    _callSubscriber(){
        console.log('Rerendering tree...');
    },

    getState(){
        return this._state
    },
    subscrider(observer){
        this._callSubscriber = observer
    },
    dispatch(action){
       this._state.profilePage = profileReduser(this._state.profilePage, action);
       this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
       this._callSubscriber(this._state);
    }
};

