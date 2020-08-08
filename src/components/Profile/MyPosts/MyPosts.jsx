import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements =
        props.store.getstate().profileData.postsData.map(p => <Post message={p.message} likescount={p.likescount} />);
    let newPostElenent = React.createRef();
    let addPost = () => {
        props.store.dispatch({type:'ADD-POST'});
    };
    let changeNewPost = () => {
        let action = {type:'UPDATE-NEW-POST-TEXT',
                      newText:newPostElenent.current.value};
        props.store.dispatch(action);
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