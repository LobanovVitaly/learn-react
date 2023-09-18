import React  from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Navigate } from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => {
        return <DialogItem id={d.id} name={d.name} avatar={d.avatar} />
    });

    let messagesElements = state.messages.map(m => {
        return <Message message={m.message}  answer={m.answer} />
    });

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form className={s.newMessage} onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newMessageBody"} placeholder={"Add new message"}/>
            <button>AddMessage</button>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;