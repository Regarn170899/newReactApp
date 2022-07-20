import './Navbar.module.css';
import s from './Navbar.module.css'
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {NavLink} from "react-router-dom";
import React from "react";

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div className={s.item}>
            <NavLink to='/settings' className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;