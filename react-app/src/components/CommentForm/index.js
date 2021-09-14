import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { newComment } from '../../store/comments'

const CommentForm = () => {
    const idObject = useParams()
    const lessons = useSelector(state => state.lessons)
    const user = useSelector(state => state.session.user)
    const lesson = lessons.find(lesson => +lesson.id === +idObject.lessonId)

    const [errors, setErrors] = useState([])
    const [content, setContent] = useState("")
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(newComment(content, user?.user_id, lesson?.lesson_id))
        if (data) {
            setErrors(data)
        }
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
                <input
                    type="textarea"
                    name="content"
                    onChange={updateContent}
                    value={content}
                ></input>
            </div>
            <button type="submit">Submit Comment</button>
        </form>
    )
}

export default CommentForm;