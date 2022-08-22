import {getFollowApi, getUnfollowApi, getUsers} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: true,
    followingInProgress: []
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default: {
            return state;
        }
    }

};

export function followSuccess(userId) {
    return {
        type: FOLLOW,
        userId
    };
}

export function unfollowSuccess(userId) {
    return {
        type: UNFOLLOW,
        userId
    };
}

export function setUsers(users) {
    return {
        type: SET_USERS,
        users
    };
}

export function setCurrentPage(currentPage) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    };
}

export function setTotalUsersCount(totalUsersCount) {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    };
}

export function toggleIsFetching(isFetching) {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching

    };

}

export function toggleFollowingProgress(isFetching, userId) {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId

    };

}

export const getUsersThunkCreator = (currentPage,pageSize ) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
        });
    }
}

export const follow=(userId)=>{
    return(dispatch)=>{
       dispatch(toggleFollowingProgress(true,userId))
        return getFollowApi(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false,userId))
            })
    }
}
export const unfollow=(userId)=>{
    return(dispatch)=>{
        dispatch(toggleFollowingProgress(true,userId))
        return getUnfollowApi(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId
                    ));
                }
                dispatch(toggleFollowingProgress(false,userId))
            })
    }
}
export default usersReduser;