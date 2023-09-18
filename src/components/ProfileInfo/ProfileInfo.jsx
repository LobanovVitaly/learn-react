import React  from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../common/Preloader/Preloader";
import photo from "../../assets/img/user-avatar.png";
import userPhoto from "../../assets/img/user-avatar.png";

import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            {/*
            <div className={s.contentTopImg}>
                <img
                    src="https://p0.piqsels.com/preview/555/605/138/clouds-daylight-hd-wallpaper-landscape-thumbnail.jpg"
                    alt=""/>
            </div>
            */}

            <div className={s.descriptionBlock}>
                <img className={s.userPhoto} src={props.profile.photos.small == null ?  photo : props.profile.photos.small } alt=""/>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                <p>{props.profile.aboutMe}</p>
            </div>

            <div className={s.socialLinks}>
                {(props.profile.contacts.facebook) &&
                    <a href={props.profile.contacts.facebook}>Facebook</a>
                }
                {(props.profile.contacts.website) &&
                    <a href={props.profile.contacts.website}>website</a>
                }
                {(props.profile.contacts.vk) &&
                    <a href={props.profile.contacts.vk}>vk</a>
                }
                {(props.profile.contacts.twitter) &&
                    <a href={props.profile.contacts.twitter}>twitter</a>
                }
                {(props.profile.contacts.instagram) &&
                    <a href={props.profile.contacts.instagram}>instagram</a>
                }
            </div>
        </div>
    );
};

export default ProfileInfo;