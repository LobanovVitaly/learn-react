import React  from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    let postElements = props.posts.map(p => {
        return <Post key={p.id} message={p.message} likesCount={p.likesCount}/>;
    });

    let newPostElement = React.createRef();

    // let onAddPost = () => {
    //     props.addPost();
    // };
    //
    // let onPostChange = ()=>{
    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text);
    // };

    return (
        <div className={s.postsBlock}>
            <h2>Posts</h2>

            <div className={s.newPostForm}>
                {/*<textarea onChange={onPostChange}*/}
                <textarea onChange={()=>{  props.onPostChangeActionCreator(newPostElement.current.value) }}
                          ref={newPostElement}
                          value={props.newPostText}
                          name="" id="" cols="30" rows="10">
                </textarea>

                {/*<button onClick={ onAddPost }>Add post</button>*/}
                <button onClick={ ()=>{ props.addPostActionCreator() } }>Add post</button>
            </div>

            {
                postElements
            }
        </div>
    );
};

export default MyPosts;






