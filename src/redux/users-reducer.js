const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
   users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:

            return {...state, users: [...state.users, ...action.users]} // склеить два массива, action.users тоже массив, поэтому через спред оператор
        default:
            return state;
    }
}

export const followAC = (userID) => {
    return {type: FOLLOW, userID: userID};
};
export const unfollowAC = (userID) => {
    return {type: UNFOLLOW, userID: userID};
};
export const setUsersAC = (users) => {
    return {type: SET_USERS, users};
};

export default usersReducer;