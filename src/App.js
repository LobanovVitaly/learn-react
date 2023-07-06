import React  from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {addNewMessage, updateMessageText, updateNewPostText} from "./redux/state";


function App(props) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs
                                                            state={props.state.dialogsPage}
                                                            addNewMessage={props.addNewMessage}
                                                            updateMessageText={props.updateMessageText}
                                                          />}/>
                        <Route path='/profile' element={<Profile
                                                            profilePage={props.state.profilePage}
                                                            addPost={props.addPost}
                                                            updateNewPostText={props.updateNewPostText}
                                                        />} />
                        <Route path='/news'  element={<News />}/>
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />}/>
                    </Routes>
                </div>
            </div>
    );
};

export default App;
