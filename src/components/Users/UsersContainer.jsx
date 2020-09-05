import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUserswAC } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {state: state.usersDataPage };
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUserswAC(users));
        }
    };
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps) (Users);

export default UsersContainer;

