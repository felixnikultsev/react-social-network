import React from 'react';
import styles from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from '../../../utils/validators/validators';
import FormControl from '../../common/FormControl/FormControl';

const maxLength30 = maxLength(30);

function MessagesForm({ handleSubmit }) {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Field
                className={styles.textarea}
                validate={[required, maxLength30]}
                elem="textarea"
                name="newMessageText"
                placeholder="Enter your message..."
                component={FormControl}></Field>
            <button className={`button ${styles.button}`}>Send</button>
        </form>
    );
}

const MessagesReduxForm = reduxForm({ form: 'message' })(MessagesForm);

function Messages({ dialogs, messages, sendMessage }) {
    let dialogsElements = dialogs.map((dialog) => (
        <Dialog id={dialog.id} name={dialog.name} key={dialog.id} />
    ));
    let messagesElements = messages.map((message) => (
        <Message user={message.user} text={message.text} key={message.id} />
    ));

    const onSubmit = (value) => {
        sendMessage(value.newMessageText);
    };

    return (
        <div className={styles.grid}>
            <div className={styles.dialogs}>{dialogsElements}</div>
            <div className={styles.messages}>
                {messagesElements}
                <MessagesReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    );
}

export default Messages;
