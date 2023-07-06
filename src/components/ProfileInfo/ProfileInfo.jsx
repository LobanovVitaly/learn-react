import React  from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.contentTopImg}>
                <img
                    src="https://p0.piqsels.com/preview/555/605/138/clouds-daylight-hd-wallpaper-landscape-thumbnail.jpg"
                    alt=""/>
            </div>

            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
    );
};

export default ProfileInfo;