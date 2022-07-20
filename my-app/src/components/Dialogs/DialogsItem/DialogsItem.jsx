import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

function DialogsItem(props) {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} className={navData => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    );
};


export default DialogsItem;