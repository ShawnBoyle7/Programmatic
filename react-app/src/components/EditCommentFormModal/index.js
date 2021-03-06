import React from 'react';
import { Modal } from '../../context/Modal';
import EditCommentForm from "../EditCommentForm"

function EditCommentFormModal({ commentId, setShowModal, showModal }) {

    return (
    <>
        {showModal && (
        <Modal onClose={() => setShowModal(false)} className='edit-modal'>
            <EditCommentForm commentId={commentId} setShowModal={setShowModal}/>
        </Modal>
        )}
    </>
    );
}

export default EditCommentFormModal;
