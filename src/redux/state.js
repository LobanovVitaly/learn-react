let rerenderEntireTree = ()=>{

};


let state = {
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
        newMessageText: ''
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
};

export const addPost = ()=>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText =  newText;
    rerenderEntireTree(state);
}

export const updateMessageText = (text) => {
    state.dialogsPage.newMessageText = text;
    rerenderEntireTree(state);
}

export const addNewMessage = () => {
    if(state.dialogsPage.newMessageText){
        let newMessage = {
            id: 4,
            message: state.dialogsPage.newMessageText,
            answer: true
        }
        state.dialogsPage.messages.push(newMessage);
        state.dialogsPage.newMessageText = '';
        rerenderEntireTree(state);
    }
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;

