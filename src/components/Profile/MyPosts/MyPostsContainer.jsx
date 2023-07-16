import React  from 'react';
import s from './MyPosts.module.css';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let onAddPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (text)=>{
        props.dispatch(onPostChangeActionCreator(text));
    };

    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostText={props.newPostText}
                 updateNewPostText={onPostChange}
                 addPost={onAddPost}/>
    );
};

export default MyPostsContainer;






