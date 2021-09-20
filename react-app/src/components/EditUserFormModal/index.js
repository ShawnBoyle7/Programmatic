import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditUserForm from '../EditUserForm';
import DeleteUserModal from '../DeleteUserModal';

function EditUserFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
        <i className="edit-user fas fa-pencil-alt" onClick={() => setShowModal(true)}></i>
        {showModal && (
            <Modal onClose={() => setShowModal(false)} className='edit-modal signup-modal'>
                <EditUserForm setShowModal={setShowModal}/>
                <DeleteUserModal/>
            </Modal>
        )}
    </>
    );
}

export default EditUserFormModal;
