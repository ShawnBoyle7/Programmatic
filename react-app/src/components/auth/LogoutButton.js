import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
    let history = useHistory()
    const dispatch = useDispatch()
    const onLogout = async (e) => {
        await dispatch(logout());
        history.push('/')
    };

    return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
