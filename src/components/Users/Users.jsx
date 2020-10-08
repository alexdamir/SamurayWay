import React from 'react';
import css from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

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
                                <button disabled={props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.setUnFollow(u.id);
                                    
                                }}>Unfollow</button>

                                : <button disabled={props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.setFollow(u.id);

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