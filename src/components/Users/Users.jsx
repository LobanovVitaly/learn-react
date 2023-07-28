import s from './Users.module.css';
import axios from "axios";
import userPhoto from "./../../assets/img/user-avatar.png"

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
            // props.setUsers([
            //         {
            //             id: 1,
            //             photoUrl: 'https://anime-fans.ru/wp-content/uploads/2021/05/Krutye-avatarki-dlya-ks-anime-kartinki_16-800x800.jpg',
            //             fullName: "Dmitry K.",
            //             location: {country: 'Belarus', city: 'Minsk'},
            //             status: 'I am looking for a Job right now...',
            //             followed: true
            //         },
            //         {
            //             id: 2,
            //             photoUrl: 'https://anime-fans.ru/wp-content/uploads/2021/05/Krutye-avatarki-dlya-ks-anime-kartinki_16-800x800.jpg',
            //             fullName: "Svetlana D.",
            //             location: {country: 'Belarus', city: 'Gomel'},
            //             status: 'I am looking for a Job right now...',
            //             followed: false
            //         },
            //         {
            //             id: 3,
            //             photoUrl: 'https://anime-fans.ru/wp-content/uploads/2021/05/Krutye-avatarki-dlya-ks-anime-kartinki_16-800x800.jpg',
            //             fullName: "Sergey S.",
            //             location: {country: 'Russia', city: 'Saratov'},
            //             status: 'I am looking for a Job right now...',
            //             followed: true
            //         }
            //     ]
            // )
        }
    }
console.log(props.users)
    let usersElements = props.users.map(u => {
        return (
            <div className={s.user} key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.fullName}
                             className={s.userPhoto}/>
                        <p>{u.name}</p>
                    </div>
                    <div>{u.followed ?
                        <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button> :
                        <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>}
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


    return (<div>
            <button onClick={getUsers}>Get users</button>
            {
                usersElements
            }
        </div>
    )
}

export default Users;