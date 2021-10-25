import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from '../auth/LoginForm'

function LoginFormModal({ dropdown=false, setRenderNavDropdown }) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = e => {
        setShowModal(false)
        if (setRenderNavDropdown) setRenderNavDropdown(false)
    }

    return (
    <>
        { !dropdown ?
            <button onClick={() => setShowModal(true)}>Log In</button>
            :
            <span onClick={() => setShowModal(true)}>Log In</span>
        }
        {showModal && (
        <Modal onClose={handleClose} className="login-modal">
            <LoginForm setShowModal={setShowModal} setRenderNavDropdown={setRenderNavDropdown}/>
        </Modal>
        )}
    </>
    );
}

export default LoginFormModal;
