import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.authMe().then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
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