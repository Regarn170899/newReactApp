import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React from 'react';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";
import {connect} from "react-redux";
import {authMe} from "./Redux/authReduser";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./Redux/appReduser";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path="/profile" element={<ProfileContainer/>}>
                            <Route path=":userId" element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                        <Route path='/Users/*' element={<UsersContainer/>}/>
                        <Route path='/login/*' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
};

const mapStateToProps=(state)=>({
    initialized:state.app.initialized
})


export default compose(
    connect(mapStateToProps,{initializeApp}))(App);