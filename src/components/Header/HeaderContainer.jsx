import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';
import * as axios from 'axios';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            { withCredentials: true })
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    let { id, email, login } = responce.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
         });
    }
    render() {
        return (
            <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.auth
    }
};

export default connect(mapStateToProps,
    { setAuthUserData })(HeaderContainer);