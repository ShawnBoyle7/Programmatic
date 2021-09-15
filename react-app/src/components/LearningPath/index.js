import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteAspiration, editAspiration } from '../../store/session'

function LearningPath() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session?.user)
  const lessons = Object.values(useSelector(state => state.curriculum.lessons))
  const aspirations = sessionUser?.aspirations.sort((a, b) => {
    return b.id - a.id
  });

  const toggleAspiration = (e) => {
    dispatch(editAspiration(e.target.id))
  }

  const removeAspiration = (e) => {
    e.preventDefault()
    dispatch(deleteAspiration(e.target.id))
  }
  const aspirationComponents = aspirations?.map((aspiration) => {
    return (
      <div key={aspiration.id}>
        <p>{lessons.find(lesson => lesson.id === aspiration.lessonId).name}</p>
        <input id={aspiration.id} checked={aspiration.completed} onChange={toggleAspiration} type="checkbox"/>
        <button id={aspiration.id} onClick={removeAspiration}>Delete Aspiration</button>
      </div>
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
