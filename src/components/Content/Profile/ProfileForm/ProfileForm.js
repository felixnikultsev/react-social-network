import React from 'react';
import styles from './ProfileForm.module.css';

import FormControl from '../../../common/FormControl/FormControl';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../../../utils/validators/validators';

function ProfileForm({ handleSubmit, initialValues, contacts, error, onCancel }) {
    return (
        <form className={styles.profileForm} onSubmit={handleSubmit}>
            <h3>Information</h3>
            <div className={styles.profileInputWrap}>
                <label htmlFor="fullName" className={styles.profileLabel}>
                    Full name:
                </label>
                <Field
                    className={styles.profileInput}
                    elem="input"
                    validate={[required]}
                    name="fullName"
                    id="fullName"
                    component={FormControl}
                />
            </div>
            <div className={styles.profileInputWrap}>
                <label htmlFor="aboutMe" className={styles.profileLabel}>
                    About me:
                </label>
                <Field
                    className={styles.profileInput}
                    elem="input"
                    validate={[required]}
                    name="aboutMe"
                    id="aboutMe"
                    component={FormControl}
                />
            </div>
            <div className={styles.profileInputWrap}>
                <label htmlFor="lookingForAJob" className={styles.profileLabel}>
                    Looking for a job:
                </label>
                <Field
                    className={styles.profileCheckbox}
                    elem="input"
                    type="checkbox"
                    name="lookingForAJob"
                    id="lookingForAJob"
                    component={FormControl}
                />
            </div>
            <div className={styles.profileInputWrap}>
                <label htmlFor="lookingForAJobDescription" className={styles.profileLabel}>
                    Description about job:
                </label>
                <Field
                    className={styles.profileInput}
                    elem="input"
                    validate={[required]}
                    name="lookingForAJobDescription"
                    id="lookingForAJobDescription"
                    component={FormControl}
                />
            </div>
            <h3 className={styles.profileContacts}>Contacts</h3>
            {Object.keys(contacts).map((contact, index) => {
                return (
                    <div key={`${contact}_${index}`} className={styles.profileInputWrap}>
                        <label htmlFor={contact} className={styles.profileLabel}>
                            {contact}:
                        </label>
                        <Field
                            className={styles.profileInput}
                            elem="input"
                            name={`contacts.${contact}`}
                            id={contact}
                            component={FormControl}
                        />
                    </div>
                );
            })}
            <div className={styles.buttons}>
                <button className={`button`}>Save</button>
                <span onClick={onCancel} className={`${styles.cancel} button`}>
                    Cancel
                </span>
            </div>
            {error && <span className={styles.error}>{error}</span>}
        </form>
    );
}

const ProfileReduxForm = reduxForm({
    form: 'profile',
})(ProfileForm);

export default ProfileReduxForm;
