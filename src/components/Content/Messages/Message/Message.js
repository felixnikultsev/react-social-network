import React from 'react';
import styles from './Message.module.css';

function Message({ text, user }) {
    return (
        <div className={styles.message}>
            <span className={styles.user}>{user}:</span>
            <span>{text}</span>
        </div>
    );
}

export default Message;
