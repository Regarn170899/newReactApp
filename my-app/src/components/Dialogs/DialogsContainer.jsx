import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/dialogsReduser';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";

let mapDispatchToProps = (dispatch) =>
{
    return{
        changeNewMessage: (text) =>
        {
            dispatch(updateNewMessageCreator(text));
        },
        send: (newMessage) => {
            dispatch(sendMessageCreator(newMessage));
        }
    }
};

let mapStateToProps = (state) =>
{
    return{
        newMessage: state.newMessage,
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Dialogs);