import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt='' />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My Posts
                <div>
                    New post
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>

            </div>

        </div>


    );
}

export default Profile;