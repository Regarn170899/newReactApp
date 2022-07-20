import s from "../Dialogs.module.css";
import React from "react";
function Message(props) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
};

export default Message;