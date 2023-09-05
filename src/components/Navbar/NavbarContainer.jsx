import React  from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {usersAPI} from "../../api/api";
import {setSidebarFriends} from "../../redux/sidebar-reducer";


class NavbarContainer extends React.Component{
    componentDidMount(){
        usersAPI.getFriends().then(friends => {
            this.props.setSidebarFriends(friends.items);
        });
    }
    render(){
        return (
            <>
                <Navbar {...this.props} />
            </>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
    }
};
// let mapDispatchToProps = () => {
//     return {};
// }

export default connect(mapStateToProps, {setSidebarFriends})(NavbarContainer);

