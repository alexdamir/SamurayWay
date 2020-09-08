import React from 'react';
import css from './Users.module.css';
import userPhoto from '../../assets/images/user.png'


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
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
                        <div><img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={css.userPhoto} /></div>
                        {u.name}<br />
                        {u.status}
                        <div>
                            {u.followed ?
                                <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                                <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                        <div>&nbsp;</div>
                    </div>
                )
            })}
        </div>
    )
}
export default Users;