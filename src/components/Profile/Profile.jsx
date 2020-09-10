import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './PrifileInfo/ProfileInfo';

const Profile = (props) => {
        return (
            <div>
                <ProfileInfo profile={props.state.profile}/>
                <MyPostsContainer />
            </div>
        );
 
}

export default Profile;