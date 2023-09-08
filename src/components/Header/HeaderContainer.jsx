import React from 'react';
import axios from "axios";
import Header from "./Header";
import {getAuthInfo, setAuthUserData, setAuthUserPhoto} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthInfo();
       //  axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
       //      withCredentials: true
       //  }).then(response => {
       //      //this.props.toggleIsFetching(false);
       //      if(response.data.resultCode === 0){
       //          let { id, email, login } = response.data.data;
       //          this.props.setAuthUserData(id, email, login);
       //
       //          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`, {
       //              withCredentials: true
       //          }).then(response => {
       //             // console.log(response.data)
       //              this.props.setAuthUserPhoto(response.data.photos.small);
       //          })
       //      }
       //  })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.auth.profile
        //isFetching: state.auth.isFetching
    };
}

export default connect(mapStateToProps, {getAuthInfo})(HeaderContainer);
