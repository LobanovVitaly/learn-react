import React from 'react';
import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "My first post", likesCount: 15},
        {id: 2, message: "My second post", likesCount: 17},
    ]
};

it('new post should be added', ()=>{
    let action = addPostActionCreator('new post text');
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('new post text must be correct', ()=>{
    let action = addPostActionCreator('new post text');
    let newState = profileReducer(state, action);

    expect(newState.posts[3].message).toBe('new post text');
});

it('after deleting length of messages should be decrement', ()=>{
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});