import React from 'react';
import {addNewMessageActionCreator, onChangeMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreСontext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let changeForm = (text) => {
                        store.dispatch(onChangeMessageActionCreator(text))
                    };

                    let addMessage = () => {
                        store.dispatch(addNewMessageActionCreator());
                    };

                    return(
                        <Dialogs dialogsPage={state}
                                 sendMessage={addMessage}
                                 changeForm={changeForm}/>
                    );
                }

            }
        </StoreContext.Consumer>

    );
};

export default DialogsContainer;