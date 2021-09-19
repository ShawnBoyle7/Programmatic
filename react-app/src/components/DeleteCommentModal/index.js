import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from '../../context/Modal';
import { deleteComment } from "../../store/comments";

function DeleteCommentModal({ commentId, setShowModal, showModal }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteComment(commentId))
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <Modal className='delete-modal' onClose={() => setShowModal(false)}>
                    <p className="comment-delete-text">Confirm Deletion</p>
                    <div>
                        <button className="comment-button" onClick={handleDelete}>Delete</button>
                        <button className="comment-button cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
                    </div>

                </Modal>
            )}
        </>
    )
}

export default DeleteCommentModal
