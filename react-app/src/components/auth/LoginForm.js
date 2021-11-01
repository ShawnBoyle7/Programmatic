import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = ({ setShowModal, setRenderNavDropdown }) => {

    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const emailErrors = errors.filter(error => error.startsWith('email')).map(error => error.slice(5));
    const passwordErrors = errors.filter(error => error.startsWith('password')).map(error => error.slice(8));
    const otherErrors = errors.filter(error => error.startsWith('other')).map(error => error.slice(5));

    const onLogin = async (e) => {
        e?.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
        }
        else {
            setShowModal(false)
            if (setRenderNavDropdown) setRenderNavDropdown(false)
            history.push('/visualizations/')
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (user) {
        return <Redirect to='/visualizations/' />;
    }


    return (
        <div className="small-form-div">
            <form className="login-form" onSubmit={onLogin}>
                <h3 className="login-form-header">Log In</h3>
                <div className="form-errors">
                    {otherErrors.map((error, ind) => (
                    <div key={ind}>
                        {error}
                    </div>
                    ))}
                </div>
                <div>
                    <input
                    name='email'
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={updateEmail}
                    required
                    />
                </div>
                <div className="form-errors field-errors">
                    {emailErrors.map((error, ind) => (
                    <div key={ind}>
                        {error}
                    </div>
                    ))}
                </div>
                <div>
                    <input
                    name='password'
                    type='password'
                    autoComplete="on"
                    placeholder='Password'
                    value={password}
                    onChange={updatePassword}
                    required
                    />
                </div>
                <div className="form-errors field-errors">
                    {passwordErrors.map((error, ind) => (
                    <div key={ind}>
                        {error}
                    </div>
                    ))}
                </div>
                <button type='submit' className="form-buttons">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
