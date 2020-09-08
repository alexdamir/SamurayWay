import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC } from "../../redux/users-reducer";

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
        }
    };
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps) (Users);

export default UsersContainer;

