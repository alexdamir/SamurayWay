import React from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={css.content}>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt='' />
            </div>
            <div>
                ava + description
            </div>
           
            <MyPosts />

        </div>


    );
}

export default Profile;