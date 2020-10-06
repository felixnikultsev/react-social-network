import React from 'react';
import styles from './Content.module.css';
import ProfileContainer from './Profile/ProfileContainer';
import MessagesContainer from './Messages/MessagesContainer';
import UsersContainer from './Users/UsersContainer';
import Login from './Login/Login';
import { Route } from 'react-router-dom';

function Content() {
    return (
        <div className={styles.content}>
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/messages" render={() => <MessagesContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
        </div>
    );
}

export default Content;
