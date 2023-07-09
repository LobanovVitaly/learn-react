const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            if (state.newMessageText) {
                let newMessage = {
                    id: 4,
                    message: state.newMessageText,
                    answer: true
                }
                state.messages.push(newMessage);
                state.newMessageText = '';
            }
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addNewMessageActionCreator = () => {
    return {type: ADD_NEW_MESSAGE};
};
export const onChangeMessageActionCreator = (text) => {
    return {type: UPDATE_MESSAGE_TEXT, newText: text};
};

export default dialogsReducer;