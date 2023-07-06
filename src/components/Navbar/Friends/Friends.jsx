import s from './Friends.module.css';

const Friends = (props) => {
    let friendsElements = props.friends.map(f => {
        return (
            <div className={s.friend}>
                <div className={s.avatar}>
                    <img src={f.avatar} alt=""/>
                </div>
                <p>{f.name}</p>
            </div>
        );
    })
    return (
        <div className={s.friendsOuterWrap}>
            <div className={s.sidebarFriendsTitle}>Friends</div>
            <div className={s.friends}>
                {friendsElements}
            </div>
        </div>
    );
}

export default Friends;