import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    setTotalUsersCount,
    toggleIsFetching, toggleFollowingProgress, getUsersThunkCreator
} from "../../Redux/usersReduser";
import * as axios from "axios";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";
import {getProfile} from "../../Redux/profileReduser";


class UsersAPIComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

    }

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users}
                       follow={this.props.follow} unfollow={this.props.unfollow} toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}/>
            </>


        );

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        toggleFollowingProgress: state.usersPage.toggleFollowingProgress
    }

}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        getUsers:getUsersThunkCreator
    }),
    withAuthNavigate
)(UsersAPIComponent);
