import React from 'react';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <div>
                <Preloader />
            </div>
        )
    }
    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt='' />
            </div>
            <div>
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.small} alt=""/>
                <div>
                    description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;