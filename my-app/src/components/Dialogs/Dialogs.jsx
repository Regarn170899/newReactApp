import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React  from "react";






function Dialogs(props) {

    let dialogsElements = props.dialogs.map((dialog) => < DialogsItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messages.map((m) => <Message message={m.message}/>)


    function send (){
        props.send();
    };

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
                <textarea onChange={changeNewMessage} value={props.newMessage} placeholder='write new message'/>
                <button onClick={send}>send</button>
            </div>
        </div>
    );
};

export default Dialogs;