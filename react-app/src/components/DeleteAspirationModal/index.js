import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from '../../context/Modal';
import { deleteAspiration } from "../../store/session";

function DeleteAspirationModal({ lessonId, setShowModal, showModal }) {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        dispatch(deleteAspiration(lessonId))
        setShowModal(false)
    }

    const onClose = (e) => {
        setShowModal(false)
        e.stopPropagation()
    }

    return (
        <>
            {showModal && (
                <Modal onClose={onClose} className='delete-modal'>
                    <p>Remove from Learning Path?</p>
                    <div>
                        <button onClick={handleDelete}>Delete</button>
                        <button className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
                    </div>

                </Modal>
            )}
        </>
    )
}

export default DeleteAspirationModal
