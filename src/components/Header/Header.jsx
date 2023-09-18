import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/user-avatar.png";
import React from "react";
import {unsetAuthInfo} from "../../redux/authReducer";

const Header = (props) => {
    return (
        <header className={s.header}>
          <img className={s.logo} src="https://avatars.mds.yandex.net/i?id=efd6ab8b3a67b0abc777cefaf348c9e086e53173-9265516-images-thumbs&n=13" alt="" />
          <div className={s.authBlock}>
              {
                  props.isAuth ?
                     <>
                         <img className={s.authPhoto} src={props.profile.photo != null ? props.profile.photo : userPhoto} alt={props.login} />
                         {props.login}

                         <button onClick={props.unsetAuthInfo}>Logout</button>
                     </> :
                     <NavLink to='/login/'>Login</NavLink>
              }
          </div>
        </header>
    )
};

export default Header;
