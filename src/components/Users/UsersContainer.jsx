import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, setUsers, setUsersCount, setCurrentPage, setIsFetching, setFollowingInProgress } from "../../redux/users-reducer";
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api.jsx';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.state.currentPage, this.props.state.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.state.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersCount(data.totalCount);
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
                    isFetching={this.props.state.isFetching}
                    setFollowingInProgress={this.props.setFollowingInProgress}
                    isFollowingInProgress={this.props.state.isFollowingInProgress}
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
    { follow, unfollow, setUsers, setUsersCount, setCurrentPage, setIsFetching, setFollowingInProgress })(UsersContainer);

