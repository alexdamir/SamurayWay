import React from 'react';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt='' />
            </div>
            <div>
                ava + description
            </div>

            <MyPosts store={props.store}/>

        </div>




    );
}

export default Profile;