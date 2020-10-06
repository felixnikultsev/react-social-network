import React from 'react';
import styles from './Users.module.css';
import User from './User';
import Pagination from '../../common/Pagination/Pagination';

const Users = ({
    totalUsersCount,
    pageSize,
    users,
    isFetchingFollow,
    follow,
    unfollow,
    currentPage,
    setCurrentPage,
    portionSize,
}) => {
    return (
        <div className={styles.users}>
            {users.map((user) => (
                <User
                    key={`${user.name}_${user.id}`}
                    {...user}
                    follow={follow}
                    unfollow={unfollow}
                    isFetchingFollow={isFetchingFollow}
                />
            ))}
            <Pagination
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                portionSize={portionSize}
            />
        </div>
    );
};

export default Users;
