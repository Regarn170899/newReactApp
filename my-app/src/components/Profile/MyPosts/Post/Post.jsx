import s from './Post.module.css';
import React from "react";

function Post (props) {
    return (
        <div className={s.item}>
            <img src="https://www.pngitem.com/pimgs/m/419-4196791_transparent-confused-man-png-default-profile-png-download.png" alt="Profile" />
            {props.message}
            <span>Like</span>
        </div>
    );
};

export default Post;