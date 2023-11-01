import React  from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../common/Preloader/Preloader";
import photo from "../../assets/img/user-avatar.png";
import ProfileStatus from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile){
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
                <img className={s.userPhoto} src={profile.photos.small == null ?  photo : profile.photos.small } alt=""/>

                <ProfileStatus status={status} updateStatus={updateStatus}/>

                <p>{profile.aboutMe}</p>
            </div>

            <div className={s.socialLinks}>
                {(profile.contacts.facebook) &&
                    <a href={profile.contacts.facebook}>Facebook</a>
                }
                {(profile.contacts.website) &&
                    <a href={profile.contacts.website}>website</a>
                }
                {(profile.contacts.vk) &&
                    <a href={profile.contacts.vk}>vk</a>
                }
                {(profile.contacts.twitter) &&
                    <a href={profile.contacts.twitter}>twitter</a>
                }
                {(profile.contacts.instagram) &&
                    <a href={profile.contacts.instagram}>instagram</a>
                }
            </div>
        </div>
    );
};

export default ProfileInfo;