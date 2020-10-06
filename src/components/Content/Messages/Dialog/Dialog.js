import React from 'react';
import styles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

function Dialog({ id, name }) {
    return (
        <NavLink to={`/messages/${id}`} activeClassName={styles.active} className={styles.item}>
            <img
                src="https://avatarfiles.alphacoders.com/161/thumb-161326.png"
                alt="avatar"
                className={styles.avatar}
            />
            <span className={styles.name}>{name}</span>
        </NavLink>
    );
}

export default Dialog;
