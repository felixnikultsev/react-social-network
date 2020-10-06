import React from 'react';
import { follow, unfollow, requestUsers } from './../../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import {
    getUsers,
    getTotalUsersCount,
    getPageSize,
    getCurrentPage,
    getIsFetching,
    getIsFetchingFollow,
    getPortionSize,
} from '../../../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (page) => {
        this.props.requestUsers(page, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader />}
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.setCurrentPage}
                    isFetchingFollow={this.props.isFetchingFollow}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    portionSize={this.props.portionSize}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFetchingFollow: getIsFetchingFollow(state),
        portionSize: getPortionSize(state),
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    requestUsers,
})(UsersContainer);
