import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(responce => {
                this.props.setUserProfile(responce.data);
            });
    }
    render() {
        return (
            <Profile {...this.props} />
        );
    }
}
let mapStateToProps = (state) => ({
    state: state.profileDataPage
})

export default connect(mapStateToProps,{setUserProfile}) (ProfileContainer);