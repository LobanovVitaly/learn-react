import React  from 'react';
import {addNewMessageActionCreator, onChangeMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let changeForm = (text) => {
        props.dispatch(onChangeMessageActionCreator(text))
    };

    let addMessage = () => {
        props.dispatch(addNewMessageActionCreator());
    };

    return (
        <Dialogs dialogsPage={state}
                 sendMessage={addMessage}
                 changeForm={changeForm} />
    );
};

export default DialogsContainer;