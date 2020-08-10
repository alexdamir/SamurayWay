import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator,updateNewPostTextActionCreator} from './../../../redux/profile-reducer';

const MyPosts = (props) => {
    debugger;
    const state = props.store.getState();
    let postElements = 
        state.profileData.postsData.map(p => <Post message={p.message} likescount={p.likescount} id={p.id} />);
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
                {postElements}
                <div>
                    <div>New post</div>
                    <div><textarea ref={newPostElenent} onChange={changeNewPost}
                        value={props.store.getState().profileData.newPostTextValue} />
                    </div>
                    <div><button onClick={addPost}>Add post</button></div>
                </div>
            </div>
        </div >
    );
}

export default MyPosts;