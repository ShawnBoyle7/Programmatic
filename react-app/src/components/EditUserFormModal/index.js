import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditUserForm from '../EditUserForm';

function EditUserFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
        {/* <i className="edit-user fas fa-pencil-alt" onClick={() => setShowModal(true)}></i> */}
        <i class="edit-user fas fa-edit fa-2x" onClick={() => setShowModal(true)}></i>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <EditUserForm setShowModal={setShowModal}/>
        </Modal>
        )}
    </>
    );
}

export default EditUserFormModal;
