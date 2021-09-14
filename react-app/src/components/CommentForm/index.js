import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newComment } from '../../store/comments'

const CommentForm = ({ userId, lessonId }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)

    const [errors, setErrors] = useState([])
    const [content, setContent] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(newComment(content, userId, lessonId))
        if (data) {
            setErrors(data)
        }
        setContent("")
    }

    const updateContent = (e) => {
        setContent(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="comment-errors">
                {errors.map((error, idx) => <div className="comment-error" key={idx}>{error}</div>)}
            </div>
            <div>
                <label>Comment as {user.firstName}</label>
                <textarea
                    name="content"
                    onChange={updateContent}
                    value={content}
                    required={true}/>
            </div>
            <button type="submit">Submit Comment</button>
        </form>
    )
}

export default CommentForm;