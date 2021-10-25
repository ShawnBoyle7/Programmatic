import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = ({ dropdown=false, setRenderNavDropdown }) => {
    let history = useHistory()
    const dispatch = useDispatch()
    const onLogout = async (e) => {
        await dispatch(logout());
        if (setRenderNavDropdown) setRenderNavDropdown(false);
        history.push('/')
    };
    return !dropdown ?
        <button className='logout-button' onClick={onLogout}>Logout</button>
        :
        <span onClick={onLogout}>Logout</span>
};

export default LogoutButton;
