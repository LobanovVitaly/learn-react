import React  from 'react';
import s from './MyPosts.module.css';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreСontext";


const MyPostsContainer = (props) => {
   // let state = props.store.getState();

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let onAddPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    let onPostChange = (text)=>{
                        store.dispatch(onPostChangeActionCreator(text));
                    };

                    return (
                        <MyPosts posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}
                                 updateNewPostText={onPostChange}
                                 addPost={onAddPost}/>
                    );
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;






