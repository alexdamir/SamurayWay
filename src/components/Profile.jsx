import React from 'react';
import p from './Profile.module.css';

const Profile = () => {
    return (
        <div className={p.content}>
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
                    <div className='item'>post 1</div>
                    <div className='item'>post 2</div>
                </div>

            </div>

        </div>


    );
}

export default Profile;