import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import * as axios from 'axios';
import { follow, unfollow, setUsers,setUsersCount, setCurrentPage, toggleIsFetching } from "../../redux/users-reducer";
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
            .then(responce => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(responce.data.items);
                this.props.setUsersCount(responce.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.pageSize}`)
            .then(responce => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(responce.data.items);
                this.props.setUsersCount(responce.data.totalCount);
            });
    }

    render() {
        return (
            <>
                { this.props.state.isFetching ? <Preloader /> : null}                
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

export default connect(mapStateToProps,
{follow,unfollow,setUsers,setUsersCount,setCurrentPage,toggleIsFetching}) (UsersContainer);

