import React  from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.posts.map(p => {
        return <Post message={p.message} likesCount={p.likesCount}/>;
    });

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    };

    return (
        <div className={s.postsBlock}>
            <h2>Posts</h2>

            <div className={s.newPostForm}>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}
                          name="" id="" cols="30" rows="10">
                </textarea>

                <button onClick={ addPost }>Add post</button>
            </div>

            {
                postElements
            }
        </div>
    );
};

export default MyPosts;






