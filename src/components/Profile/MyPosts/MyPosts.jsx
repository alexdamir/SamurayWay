import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/state.js'

const MyPosts = (props) => {
    let postElements =
        props.store.getstate().profileData.postsData.map(p => <Post message={p.message} likescount={p.likescount} />);
    let newPostElenent = React.createRef();
    let addPost = () => {
        props.store.dispatch( addPostActionCreator() );
    };
    let changeNewPost = () => {
        let text = newPostElenent.current.value;
        props.store.dispatch( updateNewPostTextActionCreator(text) );
    };
    
    return (
        <div className={css.myposts}>
            
            My Posts
            
            <div className={css.posts}>
                New post
                <textarea ref={newPostElenent} onChange={changeNewPost} 
                            value={props.store.getstate().profileData.newPostTextValue}/>
               
                <button onClick={addPost}>Add post</button> 
                {postElements}                
            </div>
        </div >
    );
}

export default MyPosts;