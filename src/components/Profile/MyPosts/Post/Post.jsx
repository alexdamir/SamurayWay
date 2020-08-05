import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (

        <div className={`${css.item} ${css.active}`}>
            <img src='https://images.app.goo.gl/joWDW8bzDK1DwApC7' alt='' />
                {props.message}
                <div>
                    <span>Like</span> :{props.likescount}
                </div>
        </div>
    );
}

export default Post;