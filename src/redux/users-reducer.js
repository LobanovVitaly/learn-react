import {followAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userID) => {
    return {type: FOLLOW, userID: userID};
};
export const unfollowSuccess = (userID) => {
    return {type: UNFOLLOW, userID: userID};
};
export const setUsers = (users) => {
    return {type: SET_USERS, users};
};
export const setCurrentPage = (page) => {
    return {type: SET_CURRENT_PAGE, currentPage: page}
};
export const setTotalUsersCount = (totalUsersCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount}
};
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
};
export const toggleIsFollowingProgress = (isFetching, userId) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress: isFetching, userId}
};

export const requestUsers = (pageSize, currentPage) =>{
    return (dispatch) => {

        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(pageSize, currentPage)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
}

export const unfollow = (userId) =>{
    return (dispatch) => {

        dispatch(toggleIsFollowingProgress(true, userId));
        followAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            })
    }
}

export const follow = (userId) =>{
    return (dispatch) => {

        dispatch(toggleIsFollowingProgress(true, userId));
        followAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            })
    }
}

export default usersReducer;