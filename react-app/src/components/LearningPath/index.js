import React from 'react';
import { useSelector } from 'react-redux'

function LearningPath() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session?.user)
  const lessons = Object.values(useSelector(state => state.curriculum.lessons))
  const aspirations = sessionUser?.aspirations

  const editAspiration = (e) => {
    dispatch(editAspiration(e.target.id, userId))
  }
  const aspirationComponents = aspirations.map((aspiration) => {
    return (
      <li key={aspiration.id}>
        <p>{lessons.find(lesson => lesson.id === aspiration.lessonId).name}</p>
        <input onClick={editAspiration} type="checkbox">Mark as Complete</input>
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
