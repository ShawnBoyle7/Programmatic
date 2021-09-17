import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { editAspiration } from '../../store/session'
import DeleteAspirationModal from '../DeleteAspirationModal';
import './AspirationDiv.css'

function AspirationDiv({ aspiration, showScroll }) {
    const [lessonIdDelete, setLessonIdDelete] = useState("")
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const dispatch = useDispatch();
    const lessons = Object.values(useSelector(state => state.curriculum.lessons))
    const lesson = lessons.find(lesson => lesson.id === aspiration.lessonId)

    const toggleAspiration = (e) => {
        dispatch(editAspiration(e.target.id))
    }

    const renderDeleteModal = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setLessonIdDelete(e.target.id)
        setShowDeleteModal(true)
    }
    //aspirations is an array of obj
    //iterate through

    //iterate through all the lessons
    // check lesson course id, if isn't rendered, make new div
    //if the lesson course id has already been seen, add to that div
    return (lesson &&
        <Link to={`/lessons/${lesson.id}`}>
            <div className={`aspiration ${aspiration.completed ? 'completed' : ''}`} onLoad={showScroll}>
                <span className='aspiration-name'>{lesson.name}</span>
                <input className='aspiration-option toggle-complete'id={aspiration.id} checked={aspiration.completed} onChange={toggleAspiration} onClick={e=>e.stopPropagation()} type="checkbox" />
                <span onClick={renderDeleteModal}><i className="fas fa-minus-circle aspiration-option delete" id={aspiration.id} ></i></span>
                <DeleteAspirationModal lessonId={lessonIdDelete} setShowModal={setShowDeleteModal} showModal={showDeleteModal}/>
            </div>
        </Link>
    );
}

export default AspirationDiv;
