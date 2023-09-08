import React  from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Navigate } from "react-router-dom";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => {
        return <DialogItem id={d.id} name={d.name} avatar={d.avatar} />
    });

    let messagesElements = state.messages.map(m => {
        return <Message message={m.message}  answer={m.answer} />
    });

    let newDialogElement = React.createRef();

    let onChangeForm = () => {
        let text = newDialogElement.current.value;
        props.changeForm(text);
    };

    let onSendMessage = () => {
        props.sendMessage();
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <div className={s.newMessage}>
                    <textarea
                        ref={newDialogElement}
                        value={state.newMessageText}
                        onChange={onChangeForm}
                    >
                    </textarea>
                    <button onClick={onSendMessage}>AddMessage</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;