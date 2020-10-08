import { followAPI, usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return { ...state, users: action.users };
        case SET_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };

        case SET_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };

        case SET_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress:
                    (action.is ?
                        [...state.isFollowingInProgress, action.id]
                        : state.isFollowingInProgress.filter(id => id !== action.id)
                    )
            };

        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setUsersCount = (totalUsersCount) => ({ type: SET_USERS_COUNT, totalUsersCount })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })
export const setFollowingInProgress = (id, is) => ({ type: SET_FOLLOWING_IN_PROGRESS, id, is })

export const getUsers = (currentPage, pageSize) => {
    return (dispath) => {
        dispath(setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispath(setIsFetching(false));
                dispath(setUsers(data.items));
                dispath(setUsersCount(data.totalCount));
            });
    }
}

export const setFollow = (userId) => {
    return (dispath) => {
        dispath(setFollowingInProgress(userId, true));
        followAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispath(follow(userId));
            }
            dispath(setFollowingInProgress(userId, false));
        });
    }
}

export const setUnFollow = (userId) => {
    return (dispath) => {
        dispath(setFollowingInProgress(userId, true));
        followAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispath(unfollow(userId));
            }
            dispath(setFollowingInProgress(userId, false));
        });
    }
}