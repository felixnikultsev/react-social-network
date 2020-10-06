import React from 'react';
import styles from './ProfileInfo.module.css';

import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileContacts from './ProfileContacts';

function ProfileInfo({ profile, status, updateProfileStatus, isOwner, changeEditMode }) {
    return (
        <div className={styles['profile-info']}>
            <h3 className={styles['profile-info__name']}>{profile.fullName}</h3>
            <ProfileStatus status={status} updateProfileStatus={updateProfileStatus} />
            <span className={styles['profile-info__item']}>
                About me:<i>{profile.aboutMe}</i>
            </span>
            <span className={styles['profile-info__item']}>
                Looking for a job:
                {profile.lookingForAJob ? (
                    <span role="img" aria-label="emoji">
                        &#9989;
                    </span>
                ) : (
                    <span role="img" aria-label="emoji">
                        &#10060;
                    </span>
                )}
            </span>
            <span className={styles['profile-info__item']}>
                Description about job:<i>{profile.lookingForAJobDescription}</i>
            </span>
            <h3 className={styles['profile-info__contacts']}>Contacts</h3>
            {Object.values(profile.contacts).every((item) => item === null) ? (
                <span>This user has no contacts...</span>
            ) : (
                <ProfileContacts contacts={profile.contacts} />
            )}
            {isOwner && (
                <button
                    onClick={changeEditMode}
                    className={`button ${styles['profile-info__button']}`}>
                    Edit
                </button>
            )}
        </div>
    );
}

export default ProfileInfo;
