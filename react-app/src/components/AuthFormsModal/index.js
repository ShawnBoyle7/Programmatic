import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Modal } from '../../context/Modal';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';

function AuthFormsModal() {
    const [showModal, setShowModal] = useState(true);
    const history = useHistory();

    const handleClose = () => {
        setShowModal(false);
        history.goBack()
    }

    return (
    <>
        {showModal && (
        <Modal onClose={handleClose} className="auth-modal">
            <p className="auth-header">You need to be logged in to access that!</p>
            <div className='auth-forms'>
                <LoginForm setShowModal={setShowModal}/>
                <SignUpForm setShowModal={setShowModal}/>
            </div>
        </Modal>
        )}
    </>
    );
}

export default AuthFormsModal;
