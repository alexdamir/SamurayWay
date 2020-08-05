import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div className={css.myposts}>
            
            My Posts
            
            <div className={css.posts}>
                New post
                <textarea></textarea>
                <button>Add post</button>
                <Post message="Hi! How are you?" likescount='0' />
                <Post message="I study React" likescount='23' />

            </div>
        </div >
    );
}

export default MyPosts;