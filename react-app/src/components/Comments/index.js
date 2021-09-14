import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../../store/comments";
import EditCommentForm from "../EditCommentForm";

const Comments = ({ lessonId }) => {
    const comments = useSelector(state => state.comments)
    const commentsArray = Object.values(comments).filter(comment => comment.lessonId === +lessonId)
    const [commentIdEdit, setCommentIdEdit] = useState("")
    const [commentIdDelete, setCommentIdDelete] = useState("")
    const [showEditForm, setShowEditForm] = useState(false)
    const [showDeleteForm, setShowDeleteForm] = useState(false)
    const dispatch = useDispatch();

    const renderEdit = (e) => {
        setCommentIdEdit(e.target.id)
        setShowEditForm(true)
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
            <div>
                {commentsArray.map(comment =>
                    <div key={comment.id}>
                        <p>{comment.content}</p>
                        <button id={comment.id} onClick={renderEdit}>Edit Comment</button>
                        <button id={comment.id} onClick={getDeleteConfirmation}>Delete Comment</button>
                    </div>)}
            </div>

            {showEditForm &&
            <EditCommentForm commentId={commentIdEdit} setShowEditForm={setShowEditForm}/>}

            {showDeleteForm && 
            <>
                <button type="button" onClick={handleDelete}>Confirm Delete</button>
                <button onClick={() => setShowDeleteForm(false)}>Cancel Delete</button>
            </>
            }
        </>
    )
}

export default Comments;