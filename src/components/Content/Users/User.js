import React from 'react';
import styles from './Users.module.css';
import userAvatar from './../../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';

function User({ id, photos, name, status, followed, follow, unfollow, isFetchingFollow }) {
    return (
        <div className={styles.item} key={id}>
            <div className={styles.info}>
                <img
                    className={styles.avatar}
                    src={!photos.small ? userAvatar : photos.small}
                    alt="avatar"
                />
                <div className={styles.desc}>
                    <h3 className={styles.name}>{name}</h3>
                    <span className={styles.location}>
                        {'location.country'}, {'location.city'}
                    </span>
                    <span className={styles.status}>{status}</span>
                </div>
            </div>
            <div className={styles.buttons}>
                <button
                    disabled={isFetchingFollow.some((userId) => userId === id)}
                    onClick={() => {
                        if (!followed) {
                            follow(id);
                        } else {
                            unfollow(id);
                        }
                    }}
                    className={`button ${styles.button}`}>
                    {followed ? 'Unfollow' : 'Follow'}
                </button>
                <NavLink to={`profile/${id}`} className={styles.link}>
                    Open profile
                </NavLink>
            </div>
        </div>
    );
}

export default User;
