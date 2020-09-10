import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId=2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
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

let WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps,{setUserProfile}) (WithUrlProfileContainer);