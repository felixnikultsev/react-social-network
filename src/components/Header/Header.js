import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

function Header(props) {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrap}>
                    <div className={styles.logo}>
                        <img src="https://web-creator.ru/uploads/Page/33/react.svg" alt="SocialNetwork" />
                        <span>React</span>
                    </div>
                    <div className={styles.login}>
                        {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;