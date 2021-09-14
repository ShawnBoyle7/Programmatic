import React from 'react';
import { useSelector } from 'react-redux'

function LearningPath() {
  const sessionUser = useSelector(state => state.session?.user)
  const lessons = Object.values(useSelector(state => state.curriculum.lessons))
  const aspirations = sessionUser?.aspirations

  const aspirationComponents = aspirations.map((aspiration) => {
    return (
      <li key={aspiration.id}>
        <p>{lessons.find(lesson => lesson.id === aspiration.lessonId).name}</p>
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
