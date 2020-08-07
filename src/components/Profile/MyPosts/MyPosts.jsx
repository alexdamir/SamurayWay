import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
    {id: 1, message: "Hi! How are you?" , likescount: 11},
    {id: 2, message: "I study React"    , likescount: 12}
];

const MyPosts = () => {
    return (
        <div className={css.myposts}>
            
            My Posts
            
            <div className={css.posts}>
                New post
                <textarea></textarea>
                <button>Add post</button>
                <Post message={postsData[0].message} likescount={postsData[0].likescount} />                
                <Post message={postsData[1].message} likescount={postsData[1].likescount} />                
            </div>
        </div >
    );
}

export default MyPosts;