import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = ({setShowModal}) => {

    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogin = async (e) => {
        e?.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
        }
        else {
            setShowModal(false)
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
                    {errors.map((error, ind) => (
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
                    />
                </div>
                <div>
                    <input
                    name='password'
                    type='password'
                    autoComplete="on"
                    placeholder='Password'
                    value={password}
                    onChange={updatePassword}
                    />
                </div>
                <button type='submit' className="form-buttons">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
