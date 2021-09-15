import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteAspiration, editAspiration } from '../../store/session'
import DeleteAspirationModal from '../DeleteAspirationModal';

function LearningPath() {
  const [lessonIdDelete, setLessonIdDelete] = useState("")
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session?.user)
  const lessons = Object.values(useSelector(state => state.curriculum.lessons))
  const aspirations = sessionUser?.aspirations.sort((a, b) => {
    return a.id - b.id
  });

  const toggleAspiration = (e) => {
    dispatch(editAspiration(e.target.id))
  }

  const removeAspiration = (e) => {
    e.preventDefault()
    dispatch(deleteAspiration(e.target.id))
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
console.log(aspirations)
  const aspirationComponents = aspirations?.map((aspiration) => {
    return (
      <>
        <div key={aspiration.id}>
          <p>{lessons.find(lesson => lesson.id === aspiration.lessonId).name}</p>
          <input id={aspiration.id} checked={aspiration.completed} onChange={toggleAspiration} type="checkbox"/>
          <button id={aspiration.id} onClick={renderDeleteModal}>Delete Aspiration</button>
        </div>

        <DeleteAspirationModal lessonId={lessonIdDelete} setShowModal={setShowDeleteModal} showModal={showDeleteModal}/>
      </>
    );
  });

  return (
    <>
      <h1>Learning Path: </h1>
      <div>{aspirationComponents}</div>
    </>
  );
}

export default LearningPath;
