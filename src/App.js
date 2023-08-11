import React  from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/dialogs/*' element={<DialogsContainer />}/>
                    <Route path='/profile/:userId?' element={<ProfileContainer />} />
                    <Route path='/news'  element={<News />}/>
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />}/>
                    <Route path='/users/*' element={<UsersContainer />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
