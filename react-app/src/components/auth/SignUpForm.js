import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = ({setShowModal}) => {
    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
        const data = await dispatch(signUp(firstName, lastName, username, email, password));
        if (data) {
            setErrors(data)
        }
        else {
            setShowModal(false)
        }
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
        return <Redirect to='/'/>;
    }

    return (
        <form onSubmit={onSignUp}>
        <h3 className="form-login-header">Sign Up</h3>
        <div className="signup-errors">
            {errors.map((error, idx) => (
            <p key={idx}>
                {console.log(errors)}
                {error}
            </p>
            ))}
        </div>
        <div>
            {/* <label>First Name</label> */}
            <input
            type='text'
            name='firstName'
            placeholder="First Name"
            onChange={updateFirstName}
            value={firstName}
            ></input>
        </div>
        <div>
            {/* <label>Last Name</label> */}
            <input
            type='text'
            name='lastName'
            placeholder="Last Name"
            onChange={updateLastName}
            value={lastName}
            ></input>
        </div>
        <div>
            {/* <label>User Name</label> */}
            <input
            type='text'
            name='username'
            placeholder="Username"
            onChange={updateUsername}
            value={username}
            ></input>
        </div>
        <div>
            {/* <label>Email</label> */}
            <input
            type='text'
            name='email'
            placeholder="Email"
            onChange={updateEmail}
            value={email}
            ></input>
        </div>
        <div>
            {/* <label>Password</label> */}
            <input
            type='password'
            name='password'
            placeholder="Password"
            onChange={updatePassword}
            value={password}
            ></input>
        </div>
        <div>
            {/* <label>Repeat Password</label> */}
            <input
            type='password'
            name='repeatPassword'
            placeholder="Confirm Password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            ></input>
        </div>
        <button type='submit'>Sign Up</button>
        </form>
    );
};

export default SignUpForm;
