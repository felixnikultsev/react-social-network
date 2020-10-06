import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    getUserProfile,
    getUserStatus,
    updateProfileStatus,
    loadAvatar,
    saveProfile,
} from '../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    updateProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            if (this.props.isAuth) {
                userId = this.props.userId;
            } else {
                this.props.history.push('/users');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
        this.isOwner = !this.props.match.params.userId;
    };

    componentDidMount() {
        this.updateProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile();
        }
    }

    render() {
        return <Profile {...this.props} isOwner={this.isOwner} />;
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        status: state.profile.status,
        userId: state.auth.id,
        isAuth: state.auth.isAuth,
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateProfileStatus,
        loadAvatar,
        saveProfile,
    }),
)(ProfileContainer);
