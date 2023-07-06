// let rerenderEntireTree = ()=>{
//
// };

let store = {
    _state: {
        dialogsPage: {
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
            ],
            newMessageText: 'dfdf'
        },
        profilePage: {
            posts: [
                {id: 1, message: "My first post", likesCount: 15},
                {id: 2, message: "My second post", likesCount: 17},
            ],
            newPostText: 'it=kamasutra.ru'
        },
        sidebar:{
            friends: [
                {id: 1, name: "Alex", avatar: "https://anime-fans.ru/wp-content/uploads/2021/05/Krutye-avatarki-dlya-ks-anime-kartinki_16-800x800.jpg"},
                {id: 2, name: "Berta", avatar: "https://steamuserimages-a.akamaihd.net/ugc/1689399388028765929/97874C1450207A7D30BD8E98D8714CF9E7F0FC72/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"},
                {id: 3, name: "Dominic", avatar: "https://otkritkis.com/wp-content/uploads/2022/06/rcc02.png"}
            ]
        }
    },

    getState(){
        return this._state;
    },

    _callSubscriber(){

    },

    addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText){
        this._state.profilePage.newPostText =  newText;
        this._callSubscriber(this._state);
    },

    updateMessageText(text){
        this._state.dialogsPage.newMessageText = text;
        this._callSubscriber(this._state);
    },

    addNewMessage(){
        //if (this._state.dialogsPage.newMessageText) {
        console.log(this._state)
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText,
                answer: true
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        //}
    },

    subscribe(observer){
        this._callSubscriber = observer;
    }
}
// let state = {
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Alex", avatar: "https://anime-fans.ru/wp-content/uploads/2021/05/Krutye-avatarki-dlya-ks-anime-kartinki_16-800x800.jpg"},
//             {id: 2, name: "Berta", avatar: "https://steamuserimages-a.akamaihd.net/ugc/1689399388028765929/97874C1450207A7D30BD8E98D8714CF9E7F0FC72/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"},
//             {id: 3, name: "Dominic", avatar: "https://otkritkis.com/wp-content/uploads/2022/06/rcc02.png"},
//             {id: 4, name: "Gretta", avatar: "https://webmg.ru/wp-content/uploads/2022/06/i-226-1.jpeg"},
//             {id: 5, name: "Hloya", avatar: "https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"},
//         ],
//         messages: [
//             {id: 1, message: "This HTML file is a template. If you open it directly in the browser, you will see an empty page. You can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts into the body tag.", answer: false},
//             {id: 2, message: "How are you?",  answer: false},
//             {id: 3, message: "I'm funny!", answer: true},
//         ],
//         newMessageText: ''
//     },
//     profilePage: {
//         posts: [
//             {id: 1, message: "My first post", likesCount: 15},
//             {id: 2, message: "My second post", likesCount: 17},
//         ],
//         newPostText: 'it=kamasutra.ru'
//     },
//     sidebar:{
//         friends: [
//             {id: 1, name: "Alex", avatar: "https://anime-fans.ru/wp-content/uploads/2021/05/Krutye-avatarki-dlya-ks-anime-kartinki_16-800x800.jpg"},
//             {id: 2, name: "Berta", avatar: "https://steamuserimages-a.akamaihd.net/ugc/1689399388028765929/97874C1450207A7D30BD8E98D8714CF9E7F0FC72/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"},
//             {id: 3, name: "Dominic", avatar: "https://otkritkis.com/wp-content/uploads/2022/06/rcc02.png"}
//         ]
//     }
// };
//
// export const addPost = ()=>{
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     };
//
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }
//
// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText =  newText;
//     rerenderEntireTree(state);
// }
//
// export const updateMessageText = (text) => {
//     state.dialogsPage.newMessageText = text;
//     rerenderEntireTree(state);
// }
//
// export const addNewMessage = () => {
//     if(state.dialogsPage.newMessageText){
//         let newMessage = {
//             id: 4,
//             message: state.dialogsPage.newMessageText,
//             answer: true
//         }
//         state.dialogsPage.messages.push(newMessage);
//         state.dialogsPage.newMessageText = '';
//         rerenderEntireTree(state);
//     }
// }
//
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

export default store;

