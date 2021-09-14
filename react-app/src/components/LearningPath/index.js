import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { editAspiration } from '../../store/session'

function LearningPath() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session?.user)
  const lessons = Object.values(useSelector(state => state.curriculum.lessons))
  const aspirations = sessionUser?.aspirations

  const toggleAspiration = (e) => {
    dispatch(editAspiration(e.target.id))
  }
  const aspirationComponents = aspirations.map((aspiration) => {
    return (
      <li key={aspiration.id}>
        <p>{lessons.find(lesson => lesson.id === aspiration.lessonId).name}</p>
        <input id={aspiration.id} checked={aspiration.completed} onChange={toggleAspiration} type="checkbox"/>
      </li>
    );
  });

  return (
    <>
      <h1>Learning Path: </h1>
      <ul>{aspirationComponents}</ul>
    </>
  );
}

export default LearningPath;
