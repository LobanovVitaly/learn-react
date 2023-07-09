import React  from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addNewMessageActionCreator, onChangeMessageActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => {
        return <DialogItem id={d.id} name={d.name} avatar={d.avatar} />
    });

    let messagesElements = props.state.messages.map(m => {
        return <Message message={m.message}  answer={m.answer} />
    });

    let newDialogElement = React.createRef();

    let changeForm = () => {
        let text = newDialogElement.current.value;
        props.dispatch(onChangeMessageActionCreator(text))
    };

    let addMessage = () => {
        props.dispatch(addNewMessageActionCreator());
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
                        value={props.state.newMessageText}
                        onChange={changeForm}
                    >
                    </textarea>
                    <button onClick={addMessage}>AddMessage</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;