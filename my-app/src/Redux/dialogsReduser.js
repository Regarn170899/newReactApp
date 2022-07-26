let initialState = {
    dialogs: [
        {id: 'Sasha', name: 'Sasha'},
        {id: 'Anton', name: 'Anton'},
        {id: 'Kiril', name: 'Kiril'},
        {id: 'Sveta', name: 'Sveta'},
    ],
    newMessage: '',
    messages: [
        {id: 'Sasha', message: 'Hi'},
        {id: 'Anton', message: 'How are you?'},
        {id: 'Kiril', message: 'Hello'},
        {id: 'Sveta', message: 'Hello world'},
    ],
};


const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE': {
            return  {
                ...state,
                newMessage: action.text
            }
        }
        case 'SEND-NEW-MESSAGE': {
            return {
                ...state,
                newMessage: '',
                messages: [...state.messages, {id: 7, message: state.newMessage}],
            };
        }
        default: {
            return state;
        }
    }
};

export function sendMessageCreator() {
    return {
        type: 'SEND-NEW-MESSAGE'
    };
}

export function updateNewMessageCreator(text) {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        text: text
    };
}

export default dialogsReduser;