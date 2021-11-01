import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = ({setShowModal, setRenderNavDropdown}) => {
    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory()
    
    const firstNameErrors = errors.filter(error => error.startsWith('first_name')).map(error => error.slice(10));
    const lastNameErrors = errors.filter(error => error.startsWith('last_name')).map(error => error.slice(9));
    const usernameErrors = errors.filter(error => error.startsWith('username')).map(error => error.slice(8));
    const emailErrors = errors.filter(error => error.startsWith('email')).map(error => error.slice(5));
    const passwordErrors = errors.filter(error => error.startsWith('password')).map(error => error.slice(8));
    const otherErrors = errors.filter(error => error.startsWith('other')).map(error => error.slice(5));

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const data = await dispatch(signUp(firstName, lastName, username, email, password));
            if (data) {
                setErrors(data)
            }
            else {
                setShowModal(false)
                if (setRenderNavDropdown) setRenderNavDropdown(false)
                history.push('/visualizations/')
            }
        } else {
            setErrors(['other: Passwords do not match.'])
        }
    };

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const updateLastName = (e) => {
        setLastName(e.target.value);
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    if (user) {
        return <Redirect to='/visualizations/'/>;
    }

    return (
        <div className="small-form-div">
            <form onSubmit={onSignUp}>
            <h3 className="form-login-header">Sign Up</h3>
            <div className="form-errors">
                {otherErrors.map((error, idx) => (
                <p key={idx}>
                    {error}
                </p>
                ))}
            </div>
            <div>
                <input
                type='text'
                name='firstName'
                placeholder="First Name"
                onChange={updateFirstName}
                value={firstName}
                required
                ></input>
            </div>
            <div className="form-errors field-errors">
                {firstNameErrors.map((error, idx) => (
                <p key={idx}>
                    {error}
                </p>
                ))}
            </div>
            <div>
                <input
                type='text'
                name='lastName'
                placeholder="Last Name"
                onChange={updateLastName}
                value={lastName}
                required
                ></input>
            </div>
            <div className="form-errors field-errors">
                {lastNameErrors.map((error, idx) => (
                <p key={idx}>
                    {error}
                </p>
                ))}
            </div>
            <div>
                <input
                type='text'
                name='username'
                placeholder="Username"
                onChange={updateUsername}
                value={username}
                required
                ></input>
            </div>
            <div className="form-errors field-errors">
                {usernameErrors.map((error, idx) => (
                <p key={idx}>
                    {error}
                </p>
                ))}
            </div>
            <div>
                <input
                type='email'
                name='email'
                placeholder="Email"
                onChange={updateEmail}
                value={email}
                required
                ></input>
            </div>
            <div className="form-errors field-errors">
                {emailErrors.map((error, idx) => (
                <p key={idx}>
                    {error}
                </p>
                ))}
            </div>
            <div>
                <input
                type='password'
                name='password'
                autoComplete="on"
                placeholder="Password"
                onChange={updatePassword}
                value={password}
                required
                ></input>
            </div>
            <div className="form-errors field-errors">
                {passwordErrors.map((error, idx) => (
                <p key={idx}>
                    {error}
                </p>
                ))}
            </div>
            <div>
                <input
                type='password'
                name='repeatPassword'
                autoComplete="on"
                placeholder="Confirm Password"
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
                ></input>
            </div>
            <button type='submit' className="form-buttons">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
