import React from 'react';
import styles from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../../common/Preloader/Preloader';
import userAvatar from '../../../assets/images/avatar.png';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileForm from './ProfileForm/ProfileForm';

function Profile({ profile, status, updateProfileStatus, isOwner, loadAvatar, saveProfile }) {
    const [editMode, setEditMode] = React.useState(false);
    const [visibleInput, setVisibleInput] = React.useState(false);

    const toggleAvatarInput = () => {
        setVisibleInput(!visibleInput);
    };

    const onLoadedPhoto = (e) => {
        if (e.target.files.length) {
            loadAvatar(e.target.files[0]);
        }
    };

    const changeEditMode = () => {
        setEditMode(!editMode);
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            changeEditMode();
        });
    };

    if (!profile) return <Preloader />;
    return (
        <div>
            <div className={styles.profile}>
                <div
                    className={styles.avatarWrap}
                    onMouseOver={toggleAvatarInput}
                    onMouseOut={toggleAvatarInput}>
                    <img
                        src={profile.photos.large || userAvatar}
                        alt="Avatar"
                        className={styles.profile__image}
                    />
                    {isOwner && (
                        <div className={styles.avatarInput}>
                            <label
                                className={`${styles.avatarLabel} ${
                                    visibleInput ? styles.active : ''
                                }`}
                                htmlFor="avatar">
                                Change avatar...
                            </label>
                            <input type="file" id="avatar" name="avatar" onChange={onLoadedPhoto} />
                        </div>
                    )}
                </div>
                {editMode ? (
                    <ProfileForm
                        onSubmit={onSubmit}
                        initialValues={profile}
                        contacts={profile.contacts}
                        onCancel={changeEditMode}
                    />
                ) : (
                    <ProfileInfo
                        profile={profile}
                        status={status}
                        updateProfileStatus={updateProfileStatus}
                        isOwner={isOwner}
                        changeEditMode={changeEditMode}
                    />
                )}
            </div>
            {!editMode && <PostsContainer />}
        </div>
    );
}

export default Profile;
