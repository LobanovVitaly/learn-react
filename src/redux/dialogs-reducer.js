const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Alex", avatar: "https://anime-fans.ru/wp-content/uploads/2021/05/Krutye-avatarki-dlya-ks-anime-kartinki_16-800x800.jpg"},
        {id: 2, name: "Berta", avatar: "https://steamuserimages-a.akamaihd.net/ugc/1689399388028765929/97874C1450207A7D30BD8E98D8714CF9E7F0FC72/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"},
        {id: 3, name: "Dominic", avatar: "https://otkritkis.com/wp-content/uploads/2022/06/rcc02.png"},
        {id: 4, name: "Gretta", avatar: "https://webmg.ru/wp-content/uploads/2022/06/i-226-1.jpeg"},
        {id: 5, name: "Hloya", avatar: "https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"},
    ],
    messages: [
        {id: 1, message: "This HTML file is a template. If you open it directly in the browser, you will see an empty page. You can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts into the body tag.", answer: false},
        {id: 2, message: "How are you?",  answer: false},
        {id: 3, message: "I'm funny!", answer: true},
    ]
};

const dialogsReducer = (state = initialState, action) => {
    // копию сразу тут делать плохо, т.к. редьюсер всегда попадает сюда, даже если action не отсюда
    // а делать лишнюю копию плохо
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            //if (state.newMessageText) {
                let newMessage = {
                    id: 4,
                    message: action.newText,
                    answer: true
                };
                return {
                    ...state,
                    messages: [...state.messages, newMessage] //вместо push
                }
            //}
            return state;
        default:
            return state;
    }
}

export const addNewMessageActionCreator = (text) => {
    return {type: ADD_NEW_MESSAGE, newText: text};
};

export default dialogsReducer;