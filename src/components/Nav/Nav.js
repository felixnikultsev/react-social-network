import React from 'react';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';

function Nav(props) {
    return (
        <nav className={styles.nav}>
            <NavLink to="/profile" activeClassName={styles.active} className={styles.nav__item}>
                Profile
            </NavLink>
            <NavLink to="/messages" activeClassName={styles.active} className={styles.nav__item}>
                Messages
            </NavLink>
            <NavLink to="/users" activeClassName={styles.active} className={styles.nav__item}>
                Users
            </NavLink>
            {props.isAuth && (
                <NavLink
                    to="/users"
                    className={`${styles.nav__item} ${styles.nav__item_logout}`}
                    onClick={props.logout}>
                    Log Out
                </NavLink>
            )}
        </nav>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { logout })(Nav);
