import React from 'react'

function LessonVote({ lessonId }) {

    const handleVote = e => {
        console.log("Voting!")
    }

    return (
        <>
        Did you find this lesson helpful?
        <button onClick={handleVote}>Yes</button>
        <button onClick={handleVote}>No</button>
        </>
    )
}

export default LessonVote
