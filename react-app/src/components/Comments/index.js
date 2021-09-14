import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditCommentFormModal from "../EditCommentFormModal";
import DeleteCommentModal from "../DeleteCommentModal"

const Comments = ({ lessonId }) => {
    const user = useSelector(state => state.session.user)
    const comments = Object.values(useSelector(state => state.comments)).filter(comment => comment.lessonId === +lessonId)

    const [commentIdEdit, setCommentIdEdit] = useState("")
    const [commentIdDelete, setCommentIdDelete] = useState("")
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const renderEditModal = (e) => {
        setCommentIdEdit(e.target.id)
        setShowEditModal(true)
    }

    const renderDeleteModal = (e) => {
        setCommentIdDelete(e.target.id)
        setShowDeleteModal(true)
    }

    return (
        <>
            <div className="comments">
                {comments.map(comment =>
                    <div className="comment" key={comment.id}>
                        <p className="comment-content">{comment.content}</p>
                        {user.id === comment.userId &&
                            <button className="comment-button" id={comment.id} onClick={renderEditModal}>Edit</button>}
                        {user.id === comment.userId &&
                            <button className="comment-button" id={comment.id} onClick={renderDeleteModal}>Delete</button>}
                    </div>)}
            </div>

            <EditCommentFormModal setShowModal={setShowEditModal} showModal={showEditModal} commentId={commentIdEdit}/>

            <DeleteCommentModal commentId={commentIdDelete} setShowModal={setShowDeleteModal} showModal={showDeleteModal}/>
        </>
    )
}

export default Comments;