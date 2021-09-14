import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { UniqueConstraintError } from "sequelize/types";
import { addToPath } from "../../store/session"

function CourseLessons() {
    let { courseId } = useParams()
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user?.id)
    const allLessons = Object.values(useSelector(state => state.curriculum.lessons))
    let courseLessons = allLessons.filter(lesson => lesson.courseId === +courseId)
    console.log(allLessons)

    const addToLearningPath = (e) => {
        dispatch(addToPath(e.target.id, userId));
    }

    const userAspirations = Object.values(useSelector(state => state.session.user.aspirations))

    courseLessonsMap = courseLessons.map((lesson) => {
        const notAdded = courseLessons.filter(lesson => lesson[lesson.id] !== userAspirations[lessonId])
        return (
            <li key={lesson.id}>
                <Link to={`/lessons/${lesson.id}`}>{lesson.name}</Link>
                {notAdded.includes(lesson[lesson.id]) &&
                <button id={lesson.id} onClick={addToLearningPath}>Add to Learning Path</button>
                }
            </li>
        );
    });
    return (
        <>
            <h1>Specific Course {courseId}</h1>
            <ul>
                {courseLessonsMap}
            </ul>
        </>
    )
}

export default CourseLessons
