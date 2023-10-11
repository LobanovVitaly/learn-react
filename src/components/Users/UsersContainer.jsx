import React from 'react';
import {connect} from "react-redux";
import {
    setCurrentPage,
    toggleIsFollowingProgress,
    requestUsers,
    follow,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component{
    // если только super, можно не писать constructor
    // constructor(props){
    //     super(props);
    // }

    componentDidMount() {

        this.props.requestUsers(this.props.pageSize, this.props.currentPage);

        //this.props.toggleIsFetching(true);

        // usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     })
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(this.props.pageSize, pageNumber);

        this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        //
        // usersAPI.getUsers(this.props.pageSize, pageNumber)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items)
        //     })
    }

    render(){
        return <>
            {this.props.isFetching ? <Preloader /> : null }

            <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               onPageChanged={this.onPageChanged}
               isFetching={this.props.isFetching}
               followingInProgress={this.props.followingInProgress}
               //toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,// массив id юзеров
//     }
// };

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),// массив id юзеров
    }
};
/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUserTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },

    }
};
*/

// export default connect(mapStateToProps,
//     { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers})(UsersContainer);

export default compose(
    //withAuthRedirect,
    connect(mapStateToProps,{ follow, unfollow, setCurrentPage, toggleIsFollowingProgress, requestUsers})
)(UsersContainer)