import s from './Header.module.css';
import React from "react";

function Header() {
    return (
        <header className={s.header}>
            <img src='https://cdn.pixabay.com/photo/2018/03/27/15/05/logo-3266214_1280.png'></img>
        </header>
    );
};

export default Header;