import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React  from "react";

import {Field, reduxForm} from "redux-form";





function Dialogs(props) {

    let dialogsElements = props.dialogs.map((dialog) => < DialogsItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messages.map((m) => <Message message={m.message}/>)
    let newMessage=props.newMessage

    function send (){
        props.send();
    };

    function sendNewMessage(values){
        props.send(values.newMessage);
    }
    function changeNewMessage(event){
        let text = event.target.value;
        props.changeNewMessage(text)
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={sendNewMessage}/>
            </div>
        </div>
    );
};

const AddNewMassageForm=(props)=>{
    return(
        <form  onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessage' placeholder='write new message'/>
            <button>Add new message</button>
        </form>
    )
}


const AddMessageFormRedux=reduxForm({
        form:'dialogAddMessageForm'
    }
)(AddNewMassageForm)
export default Dialogs;