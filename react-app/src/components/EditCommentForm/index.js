import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editComment } from '../../store/comments'

const EditCommentForm = ({ commentId, setShowModal }) => {
    const dispatch = useDispatch();

    const [errors, setErrors] = useState([])
    const [content, setContent] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(editComment(content, commentId))
        if (data) {
            setErrors(data)
        }
        setContent("")
        setShowModal(false)
    }

    const updateContent = (e) => {
        setContent(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="comment-errors">
                {errors.map((error, idx) => <div className="comment-error" key={idx}>{error}</div>)}
            </div>
            <div className='comment-div'>
                <label>Your Comment</label>
                <textarea
                    name="content"
                    onChange={updateContent}
                    value={content}/>
            </div>
            <div>
                <button type="submit">Edit</button>
                <button onClick={() => setShowModal(false)} className='cancel-button'>Cancel</button>
            </div>

        </form>
    )
}

export default EditCommentForm;
