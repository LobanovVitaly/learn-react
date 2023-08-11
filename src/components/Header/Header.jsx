import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => {
    return (
        <header className={s.header}>
          <img src="https://avatars.mds.yandex.net/i?id=efd6ab8b3a67b0abc777cefaf348c9e086e53173-9265516-images-thumbs&n=13" alt="" />
          <div className={s.authBlock}>
              {
                  props.isAuth ?
                     props.login :
                     <NavLink to='/login/'>Login</NavLink>
              }
          </div>
        </header>
    )
};

export default Header;
