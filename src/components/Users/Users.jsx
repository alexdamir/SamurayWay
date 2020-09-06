import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

let Users = (props) => {

    if (props.state.users.length===0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(responce => {
                props.setUsers(responce.data.items);
            });
        
    }


    return (
        <div>
            {props.state.users.map( u => {
                return(
                    <div keyName={u.id}>
                        <div><img src={u.photos.small != null ? u.photos.small: userPhoto  } alt="" className={css.userPhoto}/></div>
                        {u.name}<br />
                        {u.status}
                        <div>
                            {u.followed ? 
                                <button onClick={ ()=>{props.unfollow(u.id)} }>Unfollow</button> : 
                                <button onClick={ ()=>{props.follow(u.id)} }>Follow</button> }
                        </div>
                        <div>&nbsp;</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users;