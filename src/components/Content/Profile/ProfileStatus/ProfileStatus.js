import React, { useState, useEffect } from 'react';
import styles from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const toggleEditMode = () => {
        setEditMode(!editMode);
        if (editMode) props.updateProfileStatus(status);
    };

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    };

    return (
        <div className={styles.status}>
            {!editMode ? (
                <span onDoubleClick={toggleEditMode}>{props.status}</span>
            ) : (
                <input
                    onChange={onStatusChange}
                    onBlur={toggleEditMode}
                    autoFocus="true"
                    className={styles.input}
                    value={status}
                />
            )}
        </div>
    );
};

export default ProfileStatus;
