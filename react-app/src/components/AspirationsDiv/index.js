import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { editAspiration } from '../../store/session'
import DeleteAspirationModal from '../DeleteAspirationModal';

function AspirationsDiv({ aspiration }) {
    const [lessonIdDelete, setLessonIdDelete] = useState("")
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const dispatch = useDispatch();
    const lessons = Object.values(useSelector(state => state.curriculum.lessons))

    const toggleAspiration = (e) => {
        dispatch(editAspiration(e.target.id))
    }

    const renderDeleteModal = (e) => {
        setLessonIdDelete(e.target.id)
        setShowDeleteModal(true)
    }
    //aspirations is an array of obj
    //iterate through

    //iterate through all the lessons
    // check lesson course id, if isn't rendered, make new div
    //if the lesson course id has already been seen, add to that div
    return (
        <>
            <p>{lessons.find(lesson => lesson.id === aspiration.lessonId).name}</p>
            <input id={aspiration.id} checked={aspiration.completed} onChange={toggleAspiration} type="checkbox" />
            <button id={aspiration.id} onClick={renderDeleteModal}>Delete Aspiration</button>
            <DeleteAspirationModal lessonId={lessonIdDelete} setShowModal={setShowDeleteModal} showModal={showDeleteModal} />
        </>
    );
}

export default AspirationsDiv;





