import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const oMyPostsContainer = (props) => {
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     };
//     let changeNewPost = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text));
//     };

//     return (
//         <MyPosts state={props.store.getState().profileData} addPost={addPost} changeNewPost={changeNewPost} />
//     );
// }

let mapStateToProps = (state) => {
    return {state: state.profileDataPage };
};
let mapDispatchToProps = (dispatch) => {
    return ({
        addPost: () => {
            dispatch(addPostActionCreator());    
        },
        changeNewPost: (text) => {
            dispatch(updateNewPostTextActionCreator(text));   
        }
    });
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;