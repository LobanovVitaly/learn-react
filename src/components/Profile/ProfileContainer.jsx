import React  from 'react';
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { Navigate } from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;

        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
        // profileAPI.getProfile(userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data);
        //     })
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

//let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(withRouter(AuthRedirectComponent));

//export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);