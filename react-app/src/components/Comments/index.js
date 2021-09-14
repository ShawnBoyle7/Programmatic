import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditCommentForm from "../EditCommentForm";

const Comments = ({ lessonId }) => {
    const comments = useSelector(state => state.comments)
    const commentsArray = Object.values(comments).filter(comment => comment.lessonId === +lessonId)
    const [commentId, setCommentId] = useState("")
    const [showEditForm, setShowEditForm] = useState(false)

    const handleEdit = (e) => {
        setCommentId(e.target.id)
        setShowEditForm(true)
    }   

    return (
        <>
            <div>
                {commentsArray.map(comment =>
                    <div key={comment.id}>
                        <p>{comment.content}</p>
                        <button id={comment.id} onClick={handleEdit}>Edit Comment</button>
                    </div>)}
            </div>

            {showEditForm &&
            <EditCommentForm commentId={commentId} setShowEditForm={setShowEditForm}/>}
        </>
    )
}

export default Comments;