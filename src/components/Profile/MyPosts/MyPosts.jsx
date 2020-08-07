import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
    {id: 1, message: "Hi! How are you?" , likescount: 11},
    {id: 2, message: "I study React"    , likescount: 12}
];

let postElements = 
  postsData.map(p => <Post message={p.message} likescount={p.likescount} />);

const MyPosts = () => {
    return (
        <div className={css.myposts}>
            
            My Posts
            
            <div className={css.posts}>
                New post
                <textarea></textarea>
                <button>Add post</button>
                {postElements}                
            </div>
        </div >
    );
}

export default MyPosts;