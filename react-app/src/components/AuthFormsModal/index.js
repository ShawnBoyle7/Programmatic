import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';

function AuthFormsModal() {
    const [showModal, setShowModal] = useState(true);

    return (
    <>
        {/* <button onClick={() => setShowModal(true)}>All The Auth!</button> */}
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <p>You need to be logged in to access that!</p>
            <div className='auth-modal'>
                <LoginForm setShowModal={setShowModal}/>
                <SignUpForm setShowModal={setShowModal}/>
            </div>
        </Modal>
        )}
    </>
    );
}

export default AuthFormsModal;
