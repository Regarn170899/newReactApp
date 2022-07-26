const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS ='SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING';

let initialState = {
    users:[ ],
    pageSize:5,
    totalUsersCount:0,
    currentPage:3,
    isFetching:true
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
            return {...state,users:action.users}
        case SET_TOTAL_USERS_COUNT:
            return {...state,totalUsersCount: action.count}
        case SET_CURRENT_PAGE:
            return {...state,currentPage: action.currentPage}
        case TOGGLE_IS_FETCHING:
            return {...state,isFetching: action.isFetching}
        default: {
            return state;
        }
    }

};

export function follow(userId) {
    return {
        type: FOLLOW,
        userId
    };
}

export function unfollow(userId) {
    return {
        type: UNFOLLOW,
        userId
    };
}
export function setUsers(users){
    return {
        type: SET_USERS,
        users
    };
}export function setCurrentPage(currentPage) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    };
}export function setTotalUsersCount(totalUsersCount) {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    };
}export function toggleIsFetching(isFetching){
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching

    };

}

export default usersReduser;