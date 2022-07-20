import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";


function MyPosts(props) {

    let postsElement = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    function addPosts() {
        props.addPosts();
    };

    function newPostChange() {
        let text = newPostElement.current.value
        props.updateNewPostsText(text);
    };

    return (
        <div>
            <h3>My posts</h3>
            <div className={s.new_post}>
                <textarea onChange={newPostChange} ref={newPostElement} value={props.newPostText}
                          placeholder='try somthing'/>
                <button onClick={addPosts}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;