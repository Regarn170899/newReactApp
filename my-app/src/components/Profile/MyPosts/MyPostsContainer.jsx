import React from "react";
import {addPostsActionCreator, updateNewPostsTextActionCreator} from '../../../Redux/profileReduser';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostsText: (text) => {
            dispatch(updateNewPostsTextActionCreator(text));
        },
        addPosts: (newPostText) => {
            dispatch(addPostsActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;

