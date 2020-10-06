import React from 'react';
import styles from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import FormControl from '../../common/FormControl/FormControl';
import { required } from '../../../utils/validators/validators';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <Field
                className={styles.input}
                elem="input"
                validate={[required]}
                name="email"
                component={FormControl}
            />
            <Field
                className={styles.input}
                elem="input"
                validate={[required]}
                name="password"
                type="password"
                component={FormControl}
            />
            {captchaUrl && (
                <div>
                    <img src={captchaUrl} alt="captcha" className={styles.captcha} />
                    <Field
                        className={styles.input}
                        elem="input"
                        validate={[required]}
                        name="captcha"
                        component={FormControl}
                    />
                </div>
            )}
            <div className={styles.checkbox}>
                <Field type="checkbox" name="rememberMe" component="input" />
                <span>Remember me</span>
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <button className={`${styles.button} button`}>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const Login = ({ login, isAuth, captchaUrl }) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (isAuth) return <Redirect to="/profile" />;

    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
