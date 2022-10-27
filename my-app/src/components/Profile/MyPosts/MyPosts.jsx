import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validation/validators";
import {newTextarea} from "../../common/FormsControl/FormsControl";


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
const maxLength20=maxLengthCreator(20)
const AddPostForm=(props)=>{
    return(
    <form onSubmit={props.handleSubmit} className={s.new_post} >
        <Field component={newTextarea} name='newPostText' placeholder='try something' validate={[requiredField,maxLength20]}/>
        <button>Add post</button>
    </form>
    )
}

const AddPostFormRedux=reduxForm({
    form:'MyPostAddPostForm'
    }
)(AddPostForm)
export default MyPosts;