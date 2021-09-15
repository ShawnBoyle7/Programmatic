import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToPath } from "../../store/session"

function CourseLessons() {
    const dispatch = useDispatch()
    let { courseId } = useParams()

    const userId = useSelector(state => state.session.user?.id)
    const curriculum = useSelector(state => state.curriculum)
    
    const course = curriculum?.courses[+courseId]
    const allLessons = Object.values(curriculum?.lessons)
    let courseLessons = allLessons.filter(lesson => lesson.courseId === course.id)

    const addToLearningPath = (e) => {
        dispatch(addToPath(e.target.id, userId));
    }

    const userAspirations = useSelector(state => state.session.user.aspirations)

    const courseLessonsMap = courseLessons.map((lesson) => {
        const lessonAspiration = userAspirations.find(asp => asp.lessonId === lesson.id)
        return (
            <li key={lesson.id}>
                <Link to={`/lessons/${lesson.id}`}>{lesson.name}</Link>
                { !lessonAspiration &&
                    <button id={lesson.id} onClick={addToLearningPath}>Add to Learning Path</button>
                }
            </li>
        );
    });
    return (
        <>
            <h1>{course.name}</h1>
            <ul>
                {courseLessonsMap}
            </ul>
        </>
    )
}

export default CourseLessons
