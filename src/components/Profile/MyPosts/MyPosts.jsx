import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements =
        props.store._state.profileData.postsData.map(p => <Post message={p.message} likescount={p.likescount} />);
    let newPostElenent = React.createRef();
    let addPost = () => {
        let text = newPostElenent.current.value;
        props.store.addPost(text);
    };
    let changeNewPost = () => {
        let text = newPostElenent.current.value;
        props.store.changeNewPostText(text);
    };
    
    return (
        <div className={css.myposts}>
            
            My Posts
            
            <div className={css.posts}>
                New post
                <textarea ref={newPostElenent} onChange={changeNewPost} 
                            value={props.store._state.profileData.newPostTextValue}/>
               
                <button onClick={addPost}>Add post</button> 
                {postElements}                
            </div>
        </div >
    );
}

export default MyPosts;