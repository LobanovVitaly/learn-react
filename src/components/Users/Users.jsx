import React from 'react';
import s from './Users.module.css';
import axios from "axios";
import userPhoto from "./../../assets/img/user-avatar.png"

class Users extends React.Component{
    // если только super, можно не писать constructor
    // constructor(props){
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }
        let curPage = this.props.currentPage;
        let curPageStart = ((curPage - 5) < 0) ?  0  : curPage - 5 ;
        let curPageEnd = curPage + 5;
        let slicedPages = pages.slice( curPageStart, curPageEnd);

        return (
            <div>
                <div className={s.pagination}>
                {
                    //pages.map(p => {
                    slicedPages.map(p => {
                        return (
                            <span className={p === this.props.currentPage? s.currentPage : ''}
                                  onClick={()=>{this.onPageChanged(p)}}>
                                {p}
                            </span>
                        )
                    })
                }
                </div>

                {
                    this.props.users.map(u => {
                        return (
                            <div className={s.user} key={u.id}>
                                <span>
                                    <div>
                                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.fullName}
                                             className={s.userPhoto}/>
                                        <p>{u.name}</p>
                                    </div>
                                    <div>
                                        {u.followed ?
                                            <button onClick={() => { this.props.unfollow(u.id)}}>Unfollow</button> :
                                            <button onClick={() => { this.props.follow(u.id)}}>Follow</button>
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
        )
    }
}

export default Users;