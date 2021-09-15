import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../../store/comments";
import EditCommentFormModal from "../EditCommentFormModal";
import "./Comments.css"

const Comments = ({ lessonId }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)
    const users = useSelector(state => state.users)
    const comments = Object.values(useSelector(state => state.comments)).filter(comment => comment.lessonId === +lessonId)

    const [commentIdEdit, setCommentIdEdit] = useState("")
    const [commentIdDelete, setCommentIdDelete] = useState("")
    const [showModal, setShowModal] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false)

    const renderEditModal = (e) => {
        setCommentIdEdit(e.target.id)
        setShowModal(true)
    }

    const getDeleteConfirmation = (e) => {
        setCommentIdDelete(e.target.id)
        setShowDeleteForm(true)
    }

    const handleDelete = () => {
        dispatch(deleteComment(commentIdDelete))
        setShowDeleteForm(false)
    }

    return (
        <>
            <div className="comments">
                {comments.map(comment =>
                    <div className="comment-div" key={comment.id}>
                        <div className="comment">
                            <img className='comment-pic' src={users[comment.userId].imgUrl}/>
                            <div>
                                <p className='comment-author'>{users[comment.userId].username}</p>
                                <p className="comment-content">{comment.content}</p>
                            </div>
                        </div>
                        {user.id === comment.userId &&
                            <button className="comment-button" id={comment.id} onClick={renderEditModal}>Render Edit Modal</button>}
                        {user.id === comment.userId &&
                            <button className="comment-button" id={comment.id} onClick={getDeleteConfirmation}>Delete Comment</button>}
                    </div>)}
            </div>

            <EditCommentFormModal setShowModal={setShowModal} showModal={showModal} commentId={commentIdEdit}/>

            {showDeleteForm && 
            <>
                <button className="comment-button" onClick={handleDelete}>Confirm Delete</button>
                <button className="comment-button" onClick={() => setShowDeleteForm(false)}>Cancel Delete</button>
            </>
            }
        </>
    )
}

export default Comments;
