import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import AuthFormsModal from '../AuthFormsModal';

const ProtectedRoute = props => {
    const user = useSelector(state => state.session.user)
    return (
        <Route {...props}>
            {/* {(user)? props.children  : <Redirect to='/sign-up' />} */}
            {(user)? props.children  : <AuthFormsModal />}
        </Route>
    )
};


export default ProtectedRoute;
