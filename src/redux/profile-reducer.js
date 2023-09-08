import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: "My first post", likesCount: 15},
        {id: 2, message: "My second post", likesCount: 17},
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if(state.newPostText){
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                };
                return {
                    state: {...state},
                    posts: [...state.posts, newPost],
                    newPostText:  ''
                }
            }
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST};
};
export const onPostChangeActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text};
};
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile};
};


export const getUserProfile = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}


export default profileReducer;