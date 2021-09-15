import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from '../../context/Modal';
import { deleteAspiration } from "../../store/session";

function DeleteAspirationModal({ lessonId, setShowModal, showModal }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteAspiration(lessonId))
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <p>Remove from Learning Path?</p>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={() => setShowModal(false)}>Cancel</button>
                </Modal>
            )}
        </>
    )
}

export default DeleteAspirationModal
