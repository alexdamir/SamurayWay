import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements =
        props.state.postsData.map(p => <Post message={p.message} likescount={p.likescount} id={p.id} />);
    const onAddPost = () => {
        props.addPost();
    };
    const onChangeNewPost = (event) => {
        let text = event.target.value;
        props.changeNewPost(text);
    };
    debugger;
    return (
        <div className={css.myposts}>

            My Posts

            <div className={css.posts}>
                {postElements}
                <div>
                    <div>New post</div>
                    <div><textarea onChange={onChangeNewPost}
                        value={props.state.newPostTextValue} />
                    </div>
                    <div><button onClick={onAddPost}>Add post</button></div>
                </div>
            </div>
        </div >
    );
}

export default MyPosts;