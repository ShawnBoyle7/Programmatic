import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

function DeleteUserModal() {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
        <button onClick={() => setShowModal(true)}>Edit Details</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            
        </Modal>
        )}
    </>
    );
}

export default DeleteUserModal;