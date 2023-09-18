import React  from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let postElements = props.posts.map(p => {
        return <Post key={p.id} message={p.message} likesCount={p.likesCount}/>;
    });

    const submit = (value) => {
        props.addPostActionCreator(value.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h2>Posts</h2>

            <NewPostFormRedux onSubmit={submit}/>

            {
                postElements
            }
        </div>
    );
};


const NewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={s.newPostForm}>
            <Field name="newPostText" component={"textarea"} />
            <button type={"submit"}>Add post</button>
        </form>
    );
}

const NewPostFormRedux = reduxForm({
    form: 'newPost'
})(NewPostForm);

export default MyPosts;






