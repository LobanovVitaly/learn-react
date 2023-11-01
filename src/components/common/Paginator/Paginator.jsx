import s from "./Paginator.module.css";
import React from "react";


const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    let curPage = currentPage;
    let curPageStart = ((curPage - 5) < 0) ?  0  : curPage - 5 ;
    let curPageEnd = curPage + 5;
    let slicedPages = pages.slice( curPageStart, curPageEnd);

    return(
        <div className={s.pagination}>
            {
                slicedPages.map((p, id )=> {
                    return (
                        <span key={id} className={p === currentPage? s.currentPage : ''}
                              onClick={()=>{onPageChanged(p)}}>
                                {p}
                        </span>
                    )
                })
            }
        </div>
    )
}

export default Paginator;