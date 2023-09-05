import React  from 'react';
import s from './MyPosts.module.css';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostText: (text) => {
//             dispatch(onPostChangeActionCreator(text));
//         },
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         }
//     }
// };

const MyPostsContainer = connect(mapStateToProps, {onPostChangeActionCreator, addPostActionCreator})(MyPosts)

export default MyPostsContainer;






