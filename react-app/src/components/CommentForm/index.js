import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newComment } from '../../store/comments'

const CommentForm = ({ userId, lessonId }) => {

    const [errors, setErrors] = useState([])
    const [content, setContent] = useState("")
    const dispatch = useDispatch();

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
            <div>
                {errors.map((error, idx) => (
                    <div key={idx}>{error}</div>
                ))}
            </div>
            <div>
                <label>Comment as Username</label>
                <textarea
                    name="content"
                    onChange={updateContent}
                    value={content}
                    required={true}
                />
            </div>
            <button type="submit">Submit Comment</button>
        </form>
    )
}

export default CommentForm;