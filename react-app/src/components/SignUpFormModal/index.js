import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from '../auth/SignUpForm';

function SignUpFormModal({ dropdown=false, setRenderNavDropdown }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = e => {
    setShowModal(false)
    if (setRenderNavDropdown) setRenderNavDropdown(false)
  }

  return (
    <>
      { !dropdown ?
            <button onClick={() => setShowModal(true)}>Sign Up</button>
            :
            <span onClick={() => setShowModal(true)}>Sign Up</span>
        }
      {showModal && (
        <Modal onClose={handleClose} className="signup-modal">
          <SignUpForm setShowModal={setShowModal} setRenderNavDropdown={setRenderNavDropdown}/>
        </Modal>
      )}
    </>
  );
}

export default SignUpFormModal;
