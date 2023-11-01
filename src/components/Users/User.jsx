import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user-avatar.png";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div className={s.user} key={user.id}>
            <span>
                <div>
                    <div className={s.userPhoto}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={user.fullName}/>
                        </NavLink>
                    </div>
                    <p>{user.name}</p>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }
                        }>Unfollow</button> :

                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }
                        }>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
                 <span>
                    <div>u.location.country</div>
                    <div>u.location.city</div>
                </span>
            </span>
        </div>
    );
}

export default User;