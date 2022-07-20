import s from "./ProfileInfo.module.css";
import React from "react";
function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src='https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl8xNV8xNTMyMzc4MTc1XzA3OQ/screen-15.jpg?fakeurl=1&type=.jpg'
                    className={s.content__image}></img>
            </div>
            <div className='content__my_logo'>
                <img src='https://flyclipart.com/thumb2/cincinnati-bengals-nfl-cincinnati-reds-logo-decal-632814.png'
                     className={s.logo}></img>
                <div>Discriptions</div>

            </div>
        </div>
    );
};

export default ProfileInfo;