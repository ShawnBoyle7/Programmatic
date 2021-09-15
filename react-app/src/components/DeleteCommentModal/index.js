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
                <Modal onClose={() => setShowModal(false)}>
                    <p className="comment-delete-text">Confirm Deletion</p>
                    <button className="comment-button" onClick={handleDelete}>Delete</button>
                    <button className="comment-button" onClick={() => setShowModal(false)}>Cancel</button>
                </Modal>
            )}
        </>
    )
}

export default DeleteCommentModal