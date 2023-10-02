import React  from 'react';
import Profile from "./Profile";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { Navigate } from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import withRouter from "../../hoc/withRouter";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;

        if(!userId){
            //userId = 29774;
            userId = this.props.authorizedUserId

            if(!userId) {
                debugger
                //this.props.router.navigate('/login')
                const { history } = this.props;
                history.push("/login")

            }
        }
        this.props.getUserProfile(userId);
        // profileAPI.getProfile(userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data);
        //     })

        this.props.getStatus(userId)
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//export default connect(mapStateToProps, {getUserProfile})(withRouter(AuthRedirectComponent));

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)