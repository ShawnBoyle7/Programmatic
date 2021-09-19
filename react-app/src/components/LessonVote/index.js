import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote, deleteVote, updateVote } from '../../store/curriculum'
import './LessonVote.css'

function LessonVote({ lessonId, userId }) {
    const lesson = useSelector(state => state.curriculum.lessons[lessonId])
    let rating = 0;
    if (lesson.votes.length)
        rating = lesson.votes.reduce((accum, vote) => vote.liked ? accum + 1 : accum - 1, 0)
    const userVote = lesson?.votes.find(vote => vote.userId === +userId)
    const dispatch = useDispatch()

    const handleVote = e => {
        const liked = e.target.innerHTML === 'Yes' ? true : false
        if (!userVote) {
            dispatch(addVote(lessonId, userId, liked))
        }
        else if (userVote.liked !== liked){
            dispatch(updateVote(userVote.id, liked))
        }
        else if (userVote.liked === liked){
            dispatch(deleteVote(userVote.id))
        }
    }

    const setClassName = bool => {
        if (!userVote) return ''
        if (userVote.liked === bool && bool)
            return 'liked'
        else if (userVote.liked === bool && !bool)
            return 'not-liked'
    }

    return (
        <>
        <div className='helpful-div'>
            <p>Did you find this lesson helpful?</p>
            <button className={setClassName(true)} onClick={handleVote}>Yes</button>
            <button className={setClassName(false)} onClick={handleVote}>No</button>
        </div>
        <div>
            <p>Lesson Rating: <span>{rating}</span></p>
        </div>
        </>
    )
}

export default LessonVote
