import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from 'react';

const DialogItem = (props) =>{
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>
                <div className={s.avatar}>
                    <img src={props.avatar}/>
                </div>
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;