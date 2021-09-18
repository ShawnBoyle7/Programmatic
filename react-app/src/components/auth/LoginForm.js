import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import "./LoginForm.css"

const LoginForm = ({setShowModal}) => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
        }
        else {
            setShowModal(false)
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (user) {
        return <Redirect to='/' />;
    }

    return (
        <div className="small-form-div">
            <form className="login-form" onSubmit={onLogin}>
            <h3 className="login-form-header">Log In</h3>
            <div className="login-errors">
                {errors.map((error, ind) => (
                <div key={ind}>
                    {error}
                </div>
                ))}
            </div>
            <div>
                {/* <label htmlFor='email'>Email</label> */}
                <input
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
                />
            </div>
            <div>
                {/* <label htmlFor='password'>Password</label> */}
                <input
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
                />
            </div>
                <button type='submit' className="auth-buttons">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
