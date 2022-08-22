import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {Field, reduxForm} from "redux-form";


function MyPosts(props) {

    let postsElement = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostText = props.newPostText;

    function addNewPosts(values) {
        props.addPosts(values.newPostText);
    };


    return (
        <div>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPosts}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

const AddPostForm=(props)=>{
    return(
    <form onSubmit={props.handleSubmit} className={s.new_post} >
        <Field component='textarea' name='newPostText' placeholder='try something'/>
        <button>Add post</button>
    </form>
    )
}

const AddPostFormRedux=reduxForm({
    form:'MyPostAddPostForm'
    }
)(AddPostForm)
export default MyPosts;