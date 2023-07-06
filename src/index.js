import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state)=>{
    console.log(state)
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={store.addPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     addNewMessage={store.addNewMessage.bind(store)}
                     updateMessageText={store.updateMessageText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
