import React from 'react';
import css from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';



let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = pagesCount; i > 0 && i >= pagesCount - 17; i--) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return (
                            <span className={`${css.pageButton} ${props.currentPage === p ? css.selectedPage : ''}`} onClick={() => { props.onPageChanged(p) }}>{p}</span>
                        );
                    })
                }
            </div>
            {props.users.map(u => {
                return (
                    <div keyName={u.id}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={css.userPhoto} />
                            </NavLink>
                        </div>
                        {u.name}<br />
                        {u.status}
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "cf3a380c-1ab0-40cd-8f94-932a8da251e8"
                                            }
                                        })
                                        .then(responce => {
                                            if (responce.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        });

                                }}>Unfollow</button>

                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id, {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "cf3a380c-1ab0-40cd-8f94-932a8da251e8"
                                            }
                                        })
                                        .then(responce => {
                                            if (responce.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                        });

                                }}>Follow</button>}
                        </div>
                        <div>&nbsp;</div>
                    </div>
                )
            })}
        </div>
    )
}
export default Users;