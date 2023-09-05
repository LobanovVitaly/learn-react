import React from 'react';
import {addNewMessageActionCreator, onChangeMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        changeForm: (text) => {
            dispatch(onChangeMessageActionCreator(text))
        },
        sendMessage: () => {
            dispatch(addNewMessageActionCreator());
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;