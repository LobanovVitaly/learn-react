const SET_SIDEBAR_FRIENDS = 'SET_SIDEBAR_FRIENDS';


let initialState = {
    friends: [
        // {id: 1, name: "Alex", avatar: "https://anime-fans.ru/wp-content/uploads/2021/05/Krutye-avatarki-dlya-ks-anime-kartinki_16-800x800.jpg"},
        // {id: 2, name: "Berta", avatar: "https://steamuserimages-a.akamaihd.net/ugc/1689399388028765929/97874C1450207A7D30BD8E98D8714CF9E7F0FC72/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"},
        // {id: 3, name: "Dominic", avatar: "https://otkritkis.com/wp-content/uploads/2022/06/rcc02.png"}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SIDEBAR_FRIENDS:
            return {
                ...state,
                friends: action.friends
            };
        default:
            return state;
    }
}

export const setSidebarFriends = (friends) => {
    return {
        type: SET_SIDEBAR_FRIENDS,
        friends: friends
    }
}


export default sidebarReducer;