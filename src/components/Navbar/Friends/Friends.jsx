import s from './Friends.module.css';
import {NavLink} from "react-router-dom";
import defaultAvatar from './../../../assets/img/user-avatar.png';

const Friends = (props) => {
    let friendsElements = props.friends.slice(0, 3).map(f => {
        return (
            <NavLink to={'/profile/' + f.id} key={f.name} className={s.friend}>
                <div className={s.avatar}>
                    <img src={f.photos.small != null ? f.photos.small : defaultAvatar } alt={f.name}/>
                </div>
                <p>{f.name}</p>
            </NavLink>
        );
    })
    return (
        <div className={s.friendsOuterWrap}>
            <div className={s.sidebarFriendsTitle}>Friends</div>
            <div className={s.friends}>
                {friendsElements}
            </div>
        </div>
    );
}

export default Friends;