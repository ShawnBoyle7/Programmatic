import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editComment } from '../../store/comments'

const EditCommentForm = ({ commentId, setShowEditForm }) => {

    const [errors, setErrors] = useState([])
    const [content, setContent] = useState("")
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(editComment(content, commentId))
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
                <label>Your Comment</label>
                <textarea
                    name="content"
                    onChange={updateContent}
                    value={content}
                />
            </div>
            <button type="submit">Submit Comment</button>
            <button onClick={e => setShowEditForm(false)}>Cancel Edit</button>
        </form>
    )
}

export default EditCommentForm;