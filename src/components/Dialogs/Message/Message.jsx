import s from "./Message.module.css";
import React from 'react';

const Message = (props) => {
    let messClass = s.messageRow + ' ' + ((props.answer) ? s.answer : '');

    return (
        <div className={messClass}>
            <div className={s.avatar}></div>
            <div className={s.message}>
                {props.message}
            </div>
        </div>
    );
};

export default Message;