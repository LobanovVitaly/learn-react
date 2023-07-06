import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {addNewMessage, addPost, updateMessageText, updateNewPostText} from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state)=>{
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     addNewMessage={addNewMessage}
                     updateMessageText={updateMessageText}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
