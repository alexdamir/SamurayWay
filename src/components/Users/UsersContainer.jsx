import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import { setCurrentPage, getUsers, setFollow, setUnFollow } from "../../redux/users-reducer";
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.state.currentPage, this.props.state.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.state.pageSize);
    }

    render() {
        return (
            <>
                { this.props.state.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.state.totalUsersCount}
                    pageSize={this.props.state.pageSize}
                    currentPage={this.props.state.currentPage}
                    users={this.props.state.users}
                    isFetching={this.props.state.isFetching}
                    isFollowingInProgress={this.props.state.isFollowingInProgress}
                    onPageChanged={this.onPageChanged}
                    setFollow={this.props.setFollow}
                    setUnFollow={this.props.setUnFollow}
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
    { setCurrentPage, getUsers, setFollow, setUnFollow })(UsersContainer);

