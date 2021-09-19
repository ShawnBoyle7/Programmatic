import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditCommentFormModal from "../EditCommentFormModal";
import DeleteCommentModal from "../DeleteCommentModal"
import "./Comments.css"

const Comments = ({ lessonId }) => {
    const user = useSelector(state => state.session.user)
    const users = useSelector(state => state.users)
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
                    <div className="comment-div" key={comment.id}>
                        <div className="comment">
                            <img className='comment-img' src={users[comment.userId].imgUrl} alt={`${users[comment.userId].username}'s Avatar'`}/>
                            <div>
                                <p className='comment-author'>{users[comment.userId].username}</p>
                                <p className="comment-content">{comment.content}</p>
                            </div>
                        </div>
                        {user.id === comment.userId &&
                            <button className="comment-button" id={comment.id} onClick={renderEditModal}>Edit</button>}
                        {user.id === comment.userId &&
                            <button className="comment-button cancel-button" id={comment.id} onClick={renderDeleteModal}>Delete</button>}
                    </div>)}
            </div>

            <EditCommentFormModal setShowModal={setShowEditModal} showModal={showEditModal} commentId={commentIdEdit}/>

            <DeleteCommentModal commentId={commentIdDelete} setShowModal={setShowDeleteModal} showModal={showDeleteModal}/>
        </>
    )
}

export default Comments;
