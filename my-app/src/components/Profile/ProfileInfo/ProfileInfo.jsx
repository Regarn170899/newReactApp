import s from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props) {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl8xNV8xNTMyMzc4MTc1XzA3OQ/screen-15.jpg?fakeurl=1&type=.jpg'
                    className={s.content__image}></img>
            </div>
            <div className='content__my_logo'>
                <img src={props.profile.photos.large}
                     className={s.logo}></img>
                <div>Discriptions</div>

            </div>
        </div>
    );
};

export default ProfileInfo;