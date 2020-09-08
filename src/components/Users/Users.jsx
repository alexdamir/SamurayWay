import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
        .then(responce => {
            this.props.setUsers(responce.data.items,responce.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.pageSize}`)
        .then(responce => {
            this.props.setUsers(responce.data.items,responce.data.totalCount);
        });
    }

    render() {
        let pagesCount = Math.ceil (this.props.state.totalUsersCount /  this.props.state.pageSize);
        let pages = [];
        for (let i=1; i<=pagesCount; i++ ){
            pages.push(i);
        }
        return (
        <div> 
            <div>
                {
                    pages.map( p => {
                        return (
                        <span className={`${css.pageButton} ${this.props.state.currentPage === p ? css.selectedPage: ''}`} onClick={() => {this.onPageChanged(p)} }>{p}</span>
                        );
                    })
                }
            </div>           
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