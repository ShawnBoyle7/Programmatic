import React from 'react'
import { useSelector } from 'react-redux'

function Aspiration({ aspiration }) {
    const lessons = Object.values(useSelector(state => state.curriculum.lessons))

    return( lessons &&
        <div className='aspiration'>
            <p>{lessons.find(lesson => lesson.id === aspiration.lessonId).name}</p>
            <input id={aspiration.id} checked={aspiration.completed} onChange={toggleAspiration} type="checkbox" />
            <button id={aspiration.id} onClick={renderDeleteModal}>Delete Aspiration</button>
            <DeleteAspirationModal lessonId={lessonIdDelete} setShowModal={setShowDeleteModal} showModal={showDeleteModal} />
        </div>
    )
}

export default Aspiration
