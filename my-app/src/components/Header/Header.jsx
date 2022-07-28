import s from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <img src='https://cdn.pixabay.com/photo/2018/03/27/15/05/logo-3266214_1280.png'></img>
            <div className={s.loginBlock}>
                {props.isAuth?props.login :<NavLink className={s.linkLogin} to={'/login'}>Login</NavLink>}</div>
        </header>
    );
};

export default Header;