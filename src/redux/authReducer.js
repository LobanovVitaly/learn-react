import axios from "axios";
import {authAPI, profileAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const  SET_AUTH_USER_PHOTO = 'SET_AUTH_USER_PHOTO';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    profile: {
        photo: null
    },
    //isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_AUTH_USER_PHOTO:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photo: action.photo
                },
                isAuth: true
            }
        // case TOGGLE_IS_FETCHING:
        //     return {
        //         ...state,
        //         isFetching: action.isFetching
        //     }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login)=> {
    return {
        type: SET_AUTH_USER_DATA,
        data: {userId, email, login}
    }
}
export const setAuthUserPhoto = (photo)=> {
    return {
        type: SET_AUTH_USER_PHOTO,
        photo: photo
    }
}
export const getAuthInfo = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(response => {
                if(response.data.resultCode === 0){
                    let { id, email, login } = response.data.data;
                    dispatch(setAuthUserData(id, email, login));

                    profileAPI.getProfile(id)
                        .then(response => {
                            // console.log(response.data)
                            dispatch(setAuthUserPhoto(response.data.photos.small));
                        })
                }
            })
    }
}

// export const toggleIsFetching = (isFetching) => {
//     return {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
// };

export default authReducer;
