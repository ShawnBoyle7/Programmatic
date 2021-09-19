import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from '../../context/Modal';
import { deleteAspiration } from "../../store/session";

function DeleteAspirationModal({ lessonId, setShowModal, showModal, showScroll }) {
    const dispatch = useDispatch();

    const handleDelete = async (e) => {
        await dispatch(deleteAspiration(lessonId))
        setShowModal(false)
        showScroll()
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
