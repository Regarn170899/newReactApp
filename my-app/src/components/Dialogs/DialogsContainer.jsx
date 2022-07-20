import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/dialogsReduser';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) =>
{
    return{
        newMessage: state.newMessage,
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages
    }
};
let mapDispatchToProps = (dispatch) =>
{
    return{
        changeNewMessage: (text) =>
        {
            dispatch(updateNewMessageCreator(text));
        },
        send: () => {
            dispatch(sendMessageCreator());
        }
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;