import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: "My first post", likesCount: 15},
        {id: 2, message: "My second post", likesCount: 17},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            //if(state.newPostText){
                let newPost = {
                    id: 5,
                    message: action.newPostText,
                    likesCount: 0
                };
                return {
                    state: {...state},
                    posts: [...state.posts, newPost]
                }
            //}
            return state;
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((post) => post.id != action.id)
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {type: ADD_POST, newPostText};
};
export const onPostChangeActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text};
};
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile};
};
export const setStatus = (status) => {
    return {type: SET_STATUS, status};
};


export const getUserProfile = (id) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(id);
        dispatch(setUserProfile(response.data));
    }
}

export const getStatus = (id) => {
    return async (dispatch) => {
       let response = await profileAPI.getStatus(id);
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response =  await profileAPI.updateStatus(status)
        if(response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
    }
}

export const deletePost = (id) => {
    return {type: DELETE_POST, id}
}


export default profileReducer;