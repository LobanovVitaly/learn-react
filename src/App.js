import {BrowserRouter, Routes, Route, Router, Switch} from "react-router-dom";
import React, {Suspense, lazy} from 'react';
import store from "./redux/redux-store";
import {connect, Provider} from "react-redux";
import './App.css';
import withRouter from "./hoc/withRouter";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import HeaderContainer from './components/Header/HeaderContainer';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
//import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/dialogs/*' element={
                            <Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </Suspense>
                        }/>
                        <Route path='/profile/:userId?' element={
                            <Suspense fallback={<Preloader/>}>
                                <ProfileContainer/>
                            </Suspense>
                        }/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/users/*' element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

// export default compose(
//     withRouter,
//     connect(mapStateToProps, {initializedApp})
// )(App);


let AppComponent = compose(
    withRouter,
    connect(mapStateToProps, {initializedApp})
)(App);

const AppContainer = (props) => { // дополнительная обертка, чтобы использовать AppComponent вместе с Provider и BrowserRouter в app.text.js
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppComponent/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}

export default AppContainer;
