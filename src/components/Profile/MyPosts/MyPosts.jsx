import React from 'react';
import css from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={css.myposts}>
            
            My Posts
            
            <div className={css.posts}>

            <div>
                New post
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div>
                <div className={`${css.item} ${css.active}`}>
                    post 1
                </div>
                <div className={css.item}>
                    post 2
                </div>
                <div className={css.item}>
                    post 3
                </div>
                <div className={css.item}>
                    post 4
                </div>
                <div className={css.item}>
                    post 5
                </div>
            </div>

            
            </div>

        </div >



    );
}

export default MyPosts;