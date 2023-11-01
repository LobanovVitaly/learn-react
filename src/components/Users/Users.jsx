import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
    return (
        <div className={s.users}>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />

            <div className={`${s.usersList} ${props.isFetching ? s.isFetching : '' }`}>
            {
                props.users.map(u => {
                    return (
                        <User key={u.id}
                              user={u}
                              followingInProgress={props.followingInProgress}
                              unfollow={props.unfollow}
                              follow={props.follow}
                        />
                    );
                })
            }
            </div>
        </div>
    );
}

export default Users;