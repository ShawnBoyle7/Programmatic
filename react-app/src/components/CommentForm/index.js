import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newComment } from '../../store/comments'
import './CommentForm.css'

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
        <form className='comment-form' onSubmit={onSubmit}>
            <div className="comment-errors">
                {errors.map((error, idx) => <div className="comment-error" key={idx}>{error}</div>)}
            </div>
            <div className='comment-img-div'>
                <img className='comment-img' src={user.imgUrl} alt={user.username}/>
            </div>
            <div className='comment-input-div'>
                <label>Comment as {user.firstName}</label>
                <textarea
                    className='comment-input'
                    name="content"
                    onChange={updateContent}
                    value={content}
                    required={true}/>
                <button type="submit">Submit Comment</button>
            </div>
        </form>
    )
}

export default CommentForm;
