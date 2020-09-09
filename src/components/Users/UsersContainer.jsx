import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import * as axios from 'axios';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, toggleIsFetchingAC } from "../../redux/users-reducer";
import loading from '../../assets/images/loading.gif'
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
            .then(responce => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(responce.data.items, responce.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.pageSize}`)
            .then(responce => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(responce.data.items, responce.data.totalCount);
            });
    }

    render() {
        return (
            <>
                { this.props.state.isFetching ? <img src={loading} alt=""/> : null}                
                <Users totalUsersCount={this.props.state.totalUsersCount}
                    pageSize={this.props.state.pageSize}
                    currentPage={this.props.state.currentPage}
                    onPageChanged={this.onPageChanged}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    users={this.props.state.users}
                    isFetching={this.props.isFetching}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.usersDataPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users,totalUsersCount) => {
            dispatch(setUsersAC(users,totalUsersCount));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));    
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));    
        }
    };
}


export default connect(mapStateToProps,mapDispatchToProps) (UsersContainer);

