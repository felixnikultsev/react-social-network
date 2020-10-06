import React from 'react';
import styles from './ProfileInfo.module.css';

function ProfileContacts({ contacts }) {
    return (
        <div>
            {Object.keys(contacts).map((item, index) =>
                contacts[item] ? (
                    <span key={`${item}_${index}`} className={styles['profile-info__item']}>
                        {item}:<i>{contacts[item]}</i>
                    </span>
                ) : null,
            )}
        </div>
    );
}

export default ProfileContacts;
