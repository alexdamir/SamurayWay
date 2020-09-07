import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(responce => {
            this.props.setUsers(responce.data.items);
        });

    }
    
    render() {
    return (
        <div>            
            {this.props.state.users.map( u => {
                return(
                    <div keyName={u.id}>
                        <div><img src={u.photos.small != null ? u.photos.small: userPhoto  } alt="" className={css.userPhoto}/></div>
                        {u.name}<br />
                        {u.status}
                        <div>
                            {u.followed ? 
                                <button onClick={ ()=>{this.props.unfollow(u.id)} }>Unfollow</button> : 
                                <button onClick={ ()=>{this.props.follow(u.id)} }>Follow</button> }
                        </div>
                        <div>&nbsp;</div>
                    </div>
                )
            })}
        </div>
    )
        }
}

export default Users;