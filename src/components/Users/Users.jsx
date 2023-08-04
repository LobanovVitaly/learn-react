import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user-avatar.png";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    let curPage = props.currentPage;
    let curPageStart = ((curPage - 5) < 0) ?  0  : curPage - 5 ;
    let curPageEnd = curPage + 5;
    let slicedPages = pages.slice( curPageStart, curPageEnd);
    console.log(props)

    return (
        <div className={s.users}>
            <div className={s.pagination}>
                {
                    //pages.map(p => {
                    slicedPages.map(p => {
                        return (
                            <span className={p === props.currentPage? s.currentPage : ''}
                                  onClick={()=>{props.onPageChanged(p)}}>
                                {p}
                            </span>
                        )
                    })
                }
            </div>
            <div className={`${s.usersList} ${props.isFetching ? s.isFetching : '' }`}>
            {
                props.users.map(u => {
                    return (
                        <div className={s.user} key={u.id}>
                                <span>
                                    <div>
                                        <div className={s.userPhoto}>
                                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.fullName} />
                                        </div>
                                        <p>{u.name}</p>
                                    </div>
                                    <div>
                                        {u.followed ?
                                            <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button> :
                                            <button onClick={() => { props.follow(u.id)}}>Follow</button>
                                        }
                                    </div>
                                </span>
                            <span>
                                        <span>
                                            <div>{u.fullName}</div>
                                            <div>{u.status}</div>
                                        </span>
                                     <span>
                                        <div>u.location.country</div>
                                        <div>u.location.city</div>
                                    </span>
                                </span>
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
}

export default Users;