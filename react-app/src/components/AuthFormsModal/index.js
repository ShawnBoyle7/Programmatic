import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Modal } from '../../context/Modal';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';

function AuthFormsModal({ forbidden=true }) {
    const [showModal, setShowModal] = useState(forbidden);
    const history = useHistory();

    const handleClose = () => {
        setShowModal(false);
        if (forbidden) history.goBack()
    }

    return (
    <>
        {!forbidden &&
            <button onClick={() => setShowModal(true)}>Get Started</button>
        }
        {showModal && (
        <Modal onClose={handleClose} className="auth-modal">
            { forbidden &&
                <p className="auth-header">You need to be logged in to access that!</p>
            }
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
