import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import AppContainer from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import AppComponent from "./App";
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(()=>{
//     store.dispatch( {type: 'FAKE'})
// }, 1000)

root.render(
    <AppContainer/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
