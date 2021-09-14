import React from 'react'
import { useSelector } from 'react-redux'
import './LessonVote.css'

function LessonVote({ lessonId, userId }) {
    const lesson = useSelector(state => state.curriculum.lessons[lessonId])
    const userVote = lesson?.votes.find(vote => vote.userId === +userId)
    console.log("user vote -------------->", userVote)

    const handleVote = e => {
        console.log("Voting!")
    }

    const setClassName = bool => {
        if (!userVote) return ''
        if (userVote.liked === bool)
            return 'vote'
        return ''
    }

    return (
        <>
        Did you find this lesson helpful?
        <button className={setClassName('true')} onClick={handleVote}>Yes</button>
        <button className={setClassName('false')} onClick={handleVote}>No</button>
        </>
    )
}

export default LessonVote
