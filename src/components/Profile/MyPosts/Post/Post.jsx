import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (

        <div className={`${css.item} ${css.active}`}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTq4H7mPnTLV9rtqZ7_W5NeAhudM0OXP3UNNQ&usqp=CAU' alt='' />
                {props.message}
                <div>
                    <span>Like</span> {props.likescount}
                </div>
        </div>
    );
}

export default Post;